import { Modal } from "react-bootstrap";
import { TableCardDetailsProps } from "../../Interfaces";

const TableCardDetails: React.FC<TableCardDetailsProps> = ({
  show,
  handleClose,
  table,
}) => {
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton data-testid="close">
          <Modal.Title> {table.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p>
            <b>Table Name:</b> {table.name}
          </p>
          <p>
            <b>Location:</b> {table.location}
          </p>
          <p>
            <b>Capacity:</b> {table.capacity}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableCardDetails;
