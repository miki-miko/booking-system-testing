// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h2 className="navbar__logo">Restaurant Booking</h2>
//     </nav>
//   );
// };

import { Container, Navbar } from 'react-bootstrap';

const NavbarCustom = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Restaurant Booking</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;

// mylillo
