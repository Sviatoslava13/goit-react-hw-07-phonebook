import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getIsContacts } from '../redux/contactsSlice/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from 'utils/mockapiApi';

export function App() {
  const dispatch = useDispatch();
  const contatsList = useSelector(getIsContacts);
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
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
