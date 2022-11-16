import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../utils/mockapiApi';
import {
  getContacts,
  getContactsFilter,
} from '../../redux/contactsSlice/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContacts);

  const filterContact = () => {
    const filterName = filter?.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterName)
    );
  };

  const filterContactList = filterContact();
  return (
    <ul className={s.list}>
      {filterContactList.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>
            {name}:
            <a className={s.link} href={`tel:${number}`}>
              {number}
            </a>
          </p>
          <button
            onClick={() => dispatch(removeContact(id))}
            className={s.delete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
