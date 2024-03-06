import { FC } from "react";
import { Modal } from "react-bootstrap";
import { Action, Contact } from "../reducer/contactsReducer";
import ContactForm from "./ContactForm";

interface ContactEditModalProps {
  showModal: boolean;
  dataToEdit: Contact | undefined;
  toggleModal: () => void;
  dispatch: React.Dispatch<Action>;
}

const ContactEditModal: FC<ContactEditModalProps> = (props) => {
  return (
    <Modal className="modal" show={props.showModal} onHide={props.toggleModal}>
      <Modal.Header>
        <Modal.Title>Update Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm dispatch={props.dispatch} dataToEdit={props.dataToEdit} toggleModal={props.toggleModal} />
      </Modal.Body>
    </Modal>
  );
};

export default ContactEditModal;
