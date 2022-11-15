import { useState } from 'react';
import s from './ContactForm.module.css';
import { addContact } from '../../utils/mockapiApi.js'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice/contactsSelectors';
function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    contacts.some(
      contact => contact.name.trim().toLowerCase() === name.trim().toLowerCase()
    )
      ? alert(`${name} is already in contacts `)
      : dispatch(addContact({ name,number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => setNumber(e.target.value)}
          />
        </label>
        <button className={s.submit} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
export default ContactForm;
