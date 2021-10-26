import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { filterTables } from '../../store/actions';

import { RootState } from '../../store/reduxStore';
import './TableFilter.css';

export interface tableI {
  id: number;
  name: string;
  capacity: number;
  isAvailable: boolean;
  location: string;
}

const TableFilters: React.FC = () => {
  const tables: tableI[] = useSelector((state: RootState) => state.tables);

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const filter: string = event.target.value;

    const filteredArr = tables.filter((table) => table.location === filter);

    dispatch(filterTables(filteredArr));
  };

  const locations: string[] = tables.map((table) => table.location);

  const uniq = [...new Set(locations)];

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select a table</Form.Label>
        <Form.Control onChange={handleChange} as="select" aria-label="">
          <option>Select your table's location</option>
          {uniq &&
            uniq.map((location: string, index: number) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default TableFilters;
