import s from './Filter.module.css';
import { filterContact } from '../../redux/contactsSlice/contactsSlice';
import {getContactsFilter} from '../../redux/contactsSlice/contactsSelectors'
import { useSelector, useDispatch } from 'react-redux';
const Filter = () => {
  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contcts by name
      <input
        className={s.input}
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
