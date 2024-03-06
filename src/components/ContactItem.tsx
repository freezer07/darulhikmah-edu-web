import { FC } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Action, Contact, Update } from "../reducer/contactsReducer";

import { SwalAlert, SuccessAlert, CancelAlert } from "./sweetalert2/SweetAlertComponents";

interface ContactItemProps {
  index: number;
  contact: Contact;
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}

const ContactItem: FC<ContactItemProps> = ({ index, contact, handleEdit, dispatch }) => {
  const handleDelete = (contact: Contact) => {
    SwalAlert({
      title: "Are you sure?",
      text: `Are you sure to delete contact: ${contact.firstName} ${contact.lastName}?`,
      icon: "warning",
      showCancelButton: false,
      confirmButtonText: "Yes, delete it!",
    }).then((confirm) => {
      if (confirm.isConfirmed) {
        dispatch({
          type: "DELETE_CONTACT",
          payload: {
            id: contact.id,
          } as Update,
        });
        SuccessAlert();
      } else {
        CancelAlert();
      }
    });
  };

  return (
    <tr key={contact.id}>
      <td>{index + 1}</td>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.phone}</td>
      <td>
        <div className="d-flex">
          <AiFillEdit size={20} className="icon" onClick={() => handleEdit(contact.id)} />
          <AiFillDelete size={20} className="ms-2 icon" onClick={() => handleDelete(contact)} />
        </div>
      </td>
    </tr>
  );
};

export default ContactItem;
