import { FC } from "react";
import { Action, Contact } from "../reducer/contactsReducer";
import ContactItem from "./ContactItem";

interface ContactListProps {
  contacts: Contact[];
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}

const ContactList: FC<ContactListProps> = (props) => {
  const { contacts } = props;
  return (
    <div className="conatcts-list">
      <h3 className="conatcts-list-title">List of Contacts</h3>
      <div className="conatcts-list-table-container">
        <table className="table contacts-list-table">
          <thead className="contacts-list-header">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th colSpan={2}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, idx) => (
              <ContactItem index={idx} contact={contact} handleEdit={props.handleEdit} dispatch={props.dispatch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
