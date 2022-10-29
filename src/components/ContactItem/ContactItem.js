import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/slice';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css'

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button
        className={styles.button}
        type="submit"
        name={name}
        onClick={() => dispatch(removeContacts(id))}
      >
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

// const ContactItem = ({ id, name, number, onDelete }) => (
//     <li key={id} className={styles.contact}>
//         <p className={styles.contactText}>{name}</p>
//         <p className={styles.contactText}>{number}</p>
//         <button
//             type="button"
//             id={id}
//             onClick={() => onDelete(id)}
//             className={styles.button}
//         >
//         Delete
//         </button>
//     </li>
// );

// ContactItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     onDelete: PropTypes.func.isRequired,
// };

// export default ContactItem;