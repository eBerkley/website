import { render, screen } from '@testing-library/react';
import App from '../src/App';

// have not touched so far
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
