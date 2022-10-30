import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts';
import styles from './ContactItem.module.css'

const Contacts = () => {
  const contacts = useSelector(state => state.phoneBook.items);
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts
        .filter(el => el.name.toLowerCase().includes(filter))
        .map(({ id, number, name }) => (
          <li key={id}>
            {name}: {number}
            <button
              
              type="button"
              onClick={() => dispatch(deleteContact({ id }))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Contacts;

