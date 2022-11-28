import { useState, useEffect } from 'react';
import {
  Box,
  Section,
  FormInputContact,
  Filter,
  ContactsList,
} from './components';

const STORAGE_KEY = 'phonebook';

function App() {
  const localData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const [contacts, setContacts] = useState(localData);
  const [filter, setFilter] = useState('');

  const onFormSubmit = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is alredy in contacts!`);
    } else setContacts([...contacts, data]);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const changeFilterHandler = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = idContact => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== idContact)
    );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Box width="px" mx="auto" my={5} p={4} boxShadow="normal">
      <Section title="Phonebook">
        <FormInputContact onSubmit={onFormSubmit} />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <Filter value={filter} onChange={changeFilterHandler} />
        ) : (
          ''
        )}
        <ContactsList
          options={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </Box>
  );
}

export default App;
