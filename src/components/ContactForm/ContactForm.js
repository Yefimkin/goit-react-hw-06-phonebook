import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactForm.module.css'
import { nanoid } from 'nanoid';
import { addContacts } from 'redux/contacts/slice';
import { getContacts } from 'redux/contacts/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    contacts.some(contact => contact.name === name) ? alert(`${name} is already in contacts`) : dispatch(
        addContacts({
          id: nanoid(),
          name: name,
          number: number,
        })
      
      );
    formReset();

    
  }
  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const formReset = () => {
      setName('');
      setNumber('');
    };
    
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Name
                       <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        className={styles.input}
                    />
            </label>
            <label>
                Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                        className={styles.input}
                    />
            </label>
            <button type="submit" className={styles.button}>Add contact</button>
        </form>
    );
}