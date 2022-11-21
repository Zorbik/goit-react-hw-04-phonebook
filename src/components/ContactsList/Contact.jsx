import PropTypes from 'prop-types';
import { Button } from '../Form/FormInputContact.styled';
import { ContactItem } from './Contact.styled';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
