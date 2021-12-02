import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import TableCardDetail from "../TableCardDetails/TableCardDetails";
import { useDispatch } from "react-redux";
import { deleteTable } from "../../store/slices/tablesSlice";
import { Link } from "react-router-dom";
import { TableProps } from "../../Interfaces";

const Table: React.FC<TableProps> = ({ table }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const deletingTable = async () => {
    console.log("consoleSpyOn");
    dispatch(deleteTable(table.id));
  };

  return (
    <Card className="card">
      <Card.Body className="card-img-container">
        <Card.Img
          style={{ height: "190px", objectFit: "cover" }}
          variant="top"
          src={table.img}
        />
      </Card.Body>
      <Card.Body className="card-text-container">
        <Card.Header
          style={{
            padding: "8px",
            background: "rgb(18, 18, 117)",
            color: "white",
          }}
        >
          {table.name}
        </Card.Header>
        <Card.Subtitle
          className="card-subtitle"
          aria-label="card-title"
          style={{ padding: "20px 0px 0px 0px" }}
        >
          This table is for {table.capacity} persons
        </Card.Subtitle>
        <Card.Text style={{ padding: "8px", fontSize: "13px" }}>
          Location: {table.location}
        </Card.Text>
      </Card.Body>
      <Card.Body className="buttons-container">
        <Button
          variant="primary"
          onClick={() => setOpen(true)}
          className="card-button"
        >
          Details
        </Button>
        <Button
          data-testid="delete-button"
          variant="danger"
          onClick={deletingTable}
          className="card-button"
        >
          Delete
        </Button>
        <Link to="/booking">
          <Button aria-label="book-it" variant="info" className="card-button">
            Book it!
          </Button>
        </Link>
      </Card.Body>

      <TableCardDetail
        table={table}
        show={open}
        handleClose={() => setOpen(false)}
      />
    </Card>
  );
};

export default Table;
