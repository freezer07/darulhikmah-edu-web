import React from "react";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface Action {
  type: string;
  payload: Contact | Update;
}

export interface Update extends Contact {
  id: number;
  updates?: Contact;
}

export interface State {
  contacts: Contact[];
}

export const contactsReducer = (state: State, action: Action): State => {
  const contactData: Update = action.payload;

  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case "UPDATE_CONTACT":
      const updateContactId = contactData.id;
      const updateContact = contactData.updates;
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === updateContactId) {
            return {
              ...contact,
              ...updateContact,
            };
          }
          return contact;
        }),
      };

    case "DELETE_CONTACT":
      const deleteContactId = contactData.id;
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== deleteContactId),
      };

    default:
      return state;
  }
};
