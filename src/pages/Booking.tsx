import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, Button, Col, Form, Row } from 'react-bootstrap';
import { BookingI } from '../Interfaces';

import { addBooking } from '../store/actions';

const Booking: React.FC = () => {
  const [validation, setValidation] = useState(false);
  const [booking, setBooking] = useState<BookingI | null>();

  const dispatch = useDispatch();

  const checkBookingForm = () =>
    booking?.name &&
    booking?.surname &&
    booking?.email &&
    Number.parseInt(booking?.phone) >= 0;

  const onInputChange = (e: any) => {
    setBooking((booking: any) => ({
      ...booking,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewBooking = async (e: any) => {
    e.preventDefault();
    if (checkBookingForm()) {
      dispatch(addBooking(booking));
    } else {
      throw new Error('Form not Valid');
    }
  };

  let history = useHistory();

  const checkAndAddBooking = async (e: any) => {
    setValidation(true);
    try {
      await addNewBooking(e);
      setValidation(false);
      setBooking(null);
      history.push('/');
    } catch (e) {
      window.alert(e);
    }
  };

  return (
    <Container className="BookingForm">
      <Form validated={validation} style={{ width: '100%' }}>
        <Form.Group as={Row}>
          <Col>
            <Form.Control
              required
              onChange={onInputChange}
              name="name"
              type="text"
              placeholder="Name"
              aria-invalid="true"
              aria-errormessage="name"
            />
            <Form.Control.Feedback id="name" type="invalid">
              Please provide a valid name
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Col>
            <Form.Control
              required
              onChange={onInputChange}
              aria-errormessage="surname"
              type="text"
              aria-invalid="true"
              name="surname"
              placeholder="Surname"
            />
            <Form.Control.Feedback id="surname" type="invalid">
              Please provide a valid surname
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Col>
            <Form.Control
              required
              onChange={onInputChange}
              aria-invalid="true"
              aria-errormessage="email"
              type="text"
              name="email"
              placeholder="Email"
            />
            <Form.Control.Feedback id="email" type="invalid">
              Please provide a valid email address
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <br />

        <Form.Group as={Row}>
          <Col>
            <Form.Control
              required
              onChange={onInputChange}
              type="number"
              aria-invalid="true"
              aria-errormessage="phone"
              name="phone"
              min={0}
              placeholder="Phone Number"
            />
            <Form.Control.Feedback id="phone" type="invalid">
              Please provide a valid positive number
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <br />
        <Col>
          <Button onClick={checkAndAddBooking} variant="primary">
            Book Now
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default Booking;
