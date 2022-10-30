import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');
//   const initial = useRef(false);

//   useEffect(() => {
//     const contactsData = JSON.parse(localStorage.getItem('contacts'));
//     if (contactsData !== null) {
//       setContacts(prevState => [...prevState, ...contactsData]);
//     }
//   }, []);

//   useEffect(() => {
//     if (initial.current) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//     initial.current = true;
//   }, [contacts]);

//   const handleChange = e => {
//     const { value } = e.currentTarget;
//     setFilter(value);
//   };

//   const formSubmit = ({ name, number }) => {
//     setContacts(prevState => {
//       const checkContact = prevState.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       );

//       if (checkContact) {
//         alert(`${name} is already in contacts`);
//         return contacts;
//       }
//       return [
//         {
//           id: shortId.generate(),
//           name,
//           number,
//         },
//         ...prevState,
//       ];
//     });
//   };

//   const filterContacts = name => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(name.toLowerCase())
//     );
//   };

//   const deleteContact = id => {
//     setContacts(prevState => prevState.filter(contact => contact.id !== id));
//   };

//   const isContacts = contacts.length !== 0;

//   return (
//     <Container>
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={formSubmit} />

//         {isContacts && (
//           <>
//             <h2>Contacts</h2>
//             <Filter onChange={handleChange} filter={filter} />
//           </>
//         )}
//         <ContactList
//           filterContacts={filterContacts(filter)}
//           onClickDelete={deleteContact}
//         />
//       </div>
//     </Container>
//   );
// };

export default App;
