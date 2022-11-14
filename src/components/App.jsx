import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter  from './Filter/Filter';
import { getIsContacts } from '../redux/contactsSlice/contactsSelectors';
import { useSelector } from 'react-redux';

export function App() {
  const contatsList = useSelector(getIsContacts);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      {contatsList && <ContactList />}
    </div>
  );
}
