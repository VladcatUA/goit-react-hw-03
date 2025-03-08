import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ users, onDelete }) {
  return (
    <div className={css.contactList}>
      {}
      {users.map((el, index) => (
        <Contact user={el} key={index} onDelete={onDelete} />
      ))}
    </div>
  );
}