import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactItem from './ContactItem/ContactItem';
import Filter from './Filter/Filter';

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Container title="Contacts">
        <Filter />
        <ContactItem />
      </Container>
    </>
  );
}

export default App;
