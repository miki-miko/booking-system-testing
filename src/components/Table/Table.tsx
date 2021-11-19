import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import TableCardDetail from "../TableCardDetails/TableCardDetails";
import { useDispatch } from "react-redux";
import { deleteTable } from "../../store/slices/tablesSlice";
import { Link } from "react-router-dom";
import { TableProps } from "../../Interfaces";

const Table: React.FC<any> = ({ table }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const deletingTable = async () => {
    dispatch(deleteTable(table.id));
  };

  return (
    <Card className={"Card"} data-testid="card">
      <Card.Img
        style={{ height: 150, objectFit: "cover" }}
        variant="top"
        src={table.img}
      />
      <Card.Body>
        <Card.Title>{table.name}</Card.Title>
        <Card.Text style={{ minHeight: 50 }}>
          This table is for {table.capacity} persons
        </Card.Text>
        <Card.Text style={{ minHeight: 50 }}>
          Location: {table.location}
        </Card.Text>
        <div>
          <Button variant="primary" onClick={() => setOpen(true)}>
            Details
          </Button>
          <Button
            data-testid="delete-button"
            variant="danger"
            onClick={deletingTable}
          >
            Delete
          </Button>
          <Link to="/booking">
            <Button aria-label="book-it" variant="info">
              Book it!
            </Button>
          </Link>
        </div>
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
