import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import usersContact from "./contacts.json";

import { addToLocalStorage, getFromLocalStorage } from "./components/LocalStorage/LocalStorage";

const LS_KEY = "contacts";

function App() {
  const [valueContacts, setValueContacts] = useState(
    getFromLocalStorage(LS_KEY) || usersContact
  );
  useEffect(() => {
    addToLocalStorage(LS_KEY, valueContacts);
  }, [valueContacts]);
  const [filter, setFilter] = useState("");

  const addContact = (valueFromForm) => {
    setValueContacts((prevContacts) => {
      return [...prevContacts, valueFromForm];
    });
  };

  const deleteContact = (valueIdContact) => {
    setValueContacts((prevContacts) => {
      return prevContacts.filter((el) => el.id !== valueIdContact);
    });
  };
  const contactsWidthSearch = valueContacts.filter((el) => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChangeValue={setFilter} />
      <ContactList users={contactsWidthSearch} onDelete={deleteContact} />
    </>
  );
}

export default App;
