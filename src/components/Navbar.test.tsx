import { render, screen } from '@testing-library/react';
import Navbar from './Navbar/Navbar';

test('should render if component exist', () => {
  render(<Navbar />);
  const navbarTitle = screen.getByText('Restaurant Booking');
  expect(navbarTitle).toBeInTheDocument();
});
