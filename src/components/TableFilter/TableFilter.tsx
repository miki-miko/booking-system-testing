/* eslint-disable */

import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  filterTables,
  storeCapacity,
  storeLocation,
} from "../../store/slices/tablesSlice";

import { TableI } from "../../Interfaces";
import { RootState } from "../../store/reduxStore";
import { tablesSelector } from "../../store/slices/tablesSlice";

const TableFilter: React.FC<any> = ({ handleTables }) => {
  const tables: any = useSelector((state: any) => state.tables.tables);

  const filteredTables: TableI[] = useSelector(
    (state: any) => state.tables.tablesFiltered
  );

  const prevCapacity: any = useSelector((state: any) => state.tables.capacity);
  const prevLocation: any = useSelector((state: any) => state.tables.location);

  const dispatch = useDispatch();

  const locations: string[] = tables.map(
    (table: { location: string }) => table.location
  );
  const capacity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const uniqueLocations = [...new Set(locations)];

  const handleChange = (event: any) => {
    let locationFilter = event.target.value;

    dispatch(storeLocation(locationFilter));

    if (filteredTables && prevCapacity) {
      const available = tables.filter(
        (table: { location: any; capacity: number }) =>
          table.location === locationFilter && table.capacity >= prevCapacity
      );

      available.length === 0
        ? handleTables()
        : dispatch(filterTables(available));
    } else {
      const filteredArr = tables.filter(
        (table: { location: string }) => table.location === locationFilter
      );
      dispatch(filterTables(filteredArr));
    }
  };

  const changeCapacity = (event: any) => {
    let capacityFilter = event.target.value;

    dispatch(storeCapacity(capacityFilter));

    if (filteredTables && prevLocation) {
      const available = tables.filter(
        (table: { capacity: number; location: string }) =>
          table.capacity >= capacityFilter && table.location === prevLocation
      );

      available.length === 0
        ? handleTables()
        : dispatch(filterTables(available));
    } else {
      const filteredArr = tables.filter(
        (table: { capacity: number }) => table.capacity >= capacityFilter
      );
      dispatch(filterTables(filteredArr));
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select a table</Form.Label>
        <Form.Control
          onChange={handleChange}
          as="select"
          aria-label="form-select-location"
        >
          <option>Select your table's location</option>
          {uniqueLocations &&
            uniqueLocations.map((location: string, index: number) => (
              <option aria-label="location" key={index} value={location}>
                {location}
              </option>
            ))}
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select the capacity of your table</Form.Label>
        <Form.Control
          onChange={changeCapacity}
          as="select"
          aria-label="form-select-capacity"
        >
          <option>Number of persons sitting </option>
          {capacity &&
            capacity.map((capacity: number, index: number) => (
              <option aria-label="capacity" key={index} value={capacity}>
                {capacity}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default TableFilter;
