import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Action, Contact, Update } from "../reducer/contactsReducer";

interface ContactFormProps {
  dispatch: React.Dispatch<Action>;
  dataToEdit: Contact | undefined;
  toggleModal: () => void | undefined;
}

const ContactForm: FC<ContactFormProps> = (props) => {
  const { dispatch, dataToEdit, toggleModal } = props;
  const [contact, setContact] = useState({
    firstName: dataToEdit?.firstName || "",
    lastName: dataToEdit?.lastName || "",
    phone: dataToEdit?.phone || "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setContact((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handlePhoneOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setContact((prevState) => {
      return { ...prevState, [name]: value.replace(/\D/g, "") };
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { firstName, lastName, phone } = contact;

    if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
      setErrorMsg("กรุณากรอกข้อมูลให้ครบถ้วน !");
      return;
    } else if (!phone.trim().match(/^\d{10}$/g)) {
      setErrorMsg("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง !");
      return;
    }

    if (!dataToEdit) {
      dispatch({
        type: "ADD_CONTACT",
        payload: {
          id: Date.now(),
          ...contact,
        },
      });
      setContact({
        firstName: "",
        lastName: "",
        phone: "",
      });
    } else {
      dispatch({
        type: "UPDATE_CONTACT",
        payload: {
          id: dataToEdit.id,
          updates: {
            id: Date.now(),
            ...contact,
          },
        } as Update,
      });
      toggleModal && toggleModal();
    }
  };

  return (
    <Form className="contact-form" onSubmit={handleOnSubmit}>
      <Form.Group className="mt-3" controlId="first-name">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className="firstName"
          name="firstName"
          value={contact.firstName}
          type="text"
          onChange={handleInputOnChange}
        />
      </Form.Group>
      <Form.Group className="mt-3" controlId="last-name">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className="lastName"
          name="lastName"
          value={contact.lastName}
          type="text"
          onChange={handleInputOnChange}
        />
      </Form.Group>
      <Form.Group className="mt-3" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          className="phone"
          name="phone"
          value={contact.phone}
          type="tel"
          maxLength={10}
          onChange={handlePhoneOnChange}
        />
      </Form.Group>
      <Form.Group controlId="submit" className="mt-3">
        <Button variant="primary" type="submit" className="btn btn-primary submit">
          {dataToEdit ? "Update Contact" : "Add Contact"}
        </Button>
      </Form.Group>
      {errorMsg && <p className="alert alert-danger mt-3">{errorMsg}</p>}
    </Form>
  );
};

export default ContactForm;
