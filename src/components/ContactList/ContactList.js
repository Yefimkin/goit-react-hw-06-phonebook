import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css'


export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contactsFiltered) {
    return (
      <ul>
        {contactsFiltered.map(({ id, name, number }) => (
          <li className={styles.li} key={id}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    );
  }
}

// const ContactList = ({ filterContacts, onClickDelete }) => {
//   return (
//     <ul>
//       {filterContacts.map(({ id, name, number }) => {
//         return (
//           <ContactItem
//             key={id}
//             id={id}
//             name={name}
//             number={number}
//             onDelete={onClickDelete}
//           />
//         );
//       })}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   filterContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onClickDelete: PropTypes.func.isRequired,
// };

// export default ContactList;