import css from "./Contact.module.css";

export default function Contact({ user: { id, name, number }, onDelete }) {
  return (
    <div className={css.card} id={id}>
      <div>
        <div className={css.boxName}>
          
          <p className={css.title}>{name}</p>
        </div>
        <div className={css.boxName}>
          
          <p className={css.title}>{number}</p>
        </div>
      </div>

      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}