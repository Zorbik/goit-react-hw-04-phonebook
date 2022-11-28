import { Box, Contact } from '../../components';
import PropTypes from 'prop-types';

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
