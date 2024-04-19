import { render, screen } from '@testing-library/react';
import App from './App';
import Appjheel from './Appjheel';

test('renders learn react link', () => {
  render(<Appjheel />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
