import { Component } from 'react';
import {
  Box,
  Section,
  FormInputContact,
  Filter,
  ContactsList,
} from './components';

const STORAGE_KEY = 'phonebook';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFormSubmit = data => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is alredy in contacts!`);
    } else this.setState({ contacts: [...this.state.contacts, data] });
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem(STORAGE_KEY))) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem(STORAGE_KEY)),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
  }

  changeFilterHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter, contacts } = this.state;
    return (
      <Box width="px" mx="auto" my={5} p={4} boxShadow="normal">
        <Section title="Phonebook">
          <FormInputContact onSubmit={this.onFormSubmit} />
        </Section>
        <Section title="Contacts">
          {contacts.length ? (
            <Filter value={filter} onChange={this.changeFilterHandler} />
          ) : (
            ''
          )}
          <ContactsList
            options={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Box>
    );
  }
}

export default App;
