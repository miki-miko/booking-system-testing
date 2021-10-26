import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import TableCardDetail from '../TableCardDetails/TableCardDetails';
import { useDispatch } from 'react-redux';
import { tableI } from '../../Interfaces';
import { deleteTable } from '../../store/actions';

const Table: React.FC<tableI> = ({ table }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const deletingTable = async (table: { table: { id: any } }) => {
    dispatch(deleteTable(table.table.id));
  };

  return (
    <Card className={'Card'}>
      <Card.Img
        style={{ height: 150, objectFit: 'cover' }}
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
          <Button variant="danger" onClick={() => deletingTable}>
            Delete
          </Button>
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
