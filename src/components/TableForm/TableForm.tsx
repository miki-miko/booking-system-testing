import { Button, Col, Form, Row, Modal, CloseButton } from 'react-bootstrap';
import { useState } from 'react';

export interface TableFormProps {
  show: boolean;
  handleClose: () => void;
  onInputChange: any;
  addPost: any;
}

const TableForm: React.FC<TableFormProps> = ({
  show,
  handleClose,
  onInputChange,
  addPost,
}) => {
  const [validate, setValidate] = useState(false);

  const checkAndAddStarship = async (e: any) => {
    setValidate(true);
    try {
      console.log('sono qui?');
      await addPost(e);
      setValidate(false);
      handleClose();
    } catch (e) {
      window.alert(e);
    }
  };

  return (
    <Modal size="xl" centered show={show}>
      <Modal.Header>
        <Modal.Title>Add New Table</Modal.Title>
        <CloseButton aria-label="close-button" onClick={() => handleClose()} />
      </Modal.Header>
      <Modal.Body>
        <div className="Form">
          <Form validated={validate} style={{ width: '100%' }}>
            <Form.Group as={Row}>
              <Col>
                <Form.Control
                  required
                  onChange={onInputChange}
                  name="name"
                  type="text"
                  placeholder="Enter a table name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid table name.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row}>
              <Col>
                <Form.Control
                  required
                  onChange={onInputChange}
                  type="text"
                  name="location"
                  placeholder="Enter the location name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid location.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row}>
              <Col>
                <Form.Control
                  required
                  onChange={onInputChange}
                  type="text"
                  name="image"
                  placeholder="Enter the image link"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid image link.
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
                  name="capacity"
                  min={0}
                  placeholder="Enter the capacity of the table"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid positive number.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <br />
            <Col>
              <Button onClick={checkAndAddStarship} variant="primary">
                Submit
              </Button>
            </Col>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TableForm;