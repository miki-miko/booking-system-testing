/* eslint-disable */
import { Container, Navbar } from 'react-bootstrap';
import './Navbar.css';

const NavbarCustom: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>Restaurant Booking</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
