import { Box } from '../Box';

export function Section({ title, children }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h2>{title}</h2>
      {children}
    </Box>
  );
}
