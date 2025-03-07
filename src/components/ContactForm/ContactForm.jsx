import { Field } from 'formik';
import { useId } from "react";
export default function ContactForm( ) {
  const nameFieldId = useId();
  const numberFieldId = useId();

    return (
      <>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="username" id={nameFieldId} />

        </div>

        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="phone" name="phone" id={numberFieldId} />
    
        </div>
      </>
    );
  }