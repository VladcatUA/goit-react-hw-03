//import { useState } from 'react'
import { Formik, Form } from 'formik';
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
//import SearchBox from './components/SearchBox/SearchBox'
//import ContactList from './components/ContactList/ContactList'

function App() {

  const initialValues = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]; 

   /* const handleSubmit = (values, actions) => {
      console.log(values);
      actions.resetForm();

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  }; */

  return (
    
     <div>
        <h1>Phonebook</h1>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
        <ContactForm />
			</Form>
    </Formik>
     </div>
    
  )
}

export default App
