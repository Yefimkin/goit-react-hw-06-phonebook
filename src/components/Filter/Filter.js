import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/contacts/slice';
import { getFilter } from 'redux/contacts/selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Please enter name to find contact"
        onChange={evt => dispatch(setFilter(evt.target.value))}
        className={styles.input}
      />
    </>
  );
};
