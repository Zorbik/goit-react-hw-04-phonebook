import { Contact } from './Contact';
import PropTypes from 'prop-types';
import { Box } from '../Box';

export function ContactsList({ options, onDeleteContact }) {
  return (
    <Box as="ul" px={3} mb={0}>
      {options &&
        options.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </Box>
  );
}

ContactsList.propTypes = {
  options: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
