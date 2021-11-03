import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { filterTables } from '../../store/actions';
import { tableI } from '../../Interfaces';

import { RootState } from '../../store/reduxStore';

const TableFilter: React.FC = () => {
  const tables: tableI[] = useSelector((state: any) => state.tables.tables);

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const locationFilter: string = event.target.value;
    const capacityFilter: any = event.target.value;

    // console.log(typeof capacityFilter);

    const filteredArr = tables.filter(
      (table) => table.location === locationFilter
    );

    // console.log(filteredArr);
    dispatch(filterTables(filteredArr));
  };

  const changeCapacity = (event: any) => {
    // const locationFilter: string = event.target.value;
    const capacityFilter: any = event.target.value;

    // console.log(typeof capacityFilter);

    const filteredArr = tables.filter(
      (table) => table.capacity >= Number.parseInt(capacityFilter)
    );

    // console.log(filteredArr);
    dispatch(filterTables(filteredArr));
  };

  // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  // const memoizedCallback = useCallback(() => {
  //   doSomething(a, b);
  // }, [a, b]);

  // const handleCapacity = (event: any) => {

  //   const capacityState = tables.filter(
  //     (table) => table.capacity >= capacityFilter
  //   );
  //   dispatch(filterTables(capacityState));
  // };

  const locations: string[] = tables.map((table) => table.location);
  const capacity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const uniqueLocations = [...new Set(locations)];

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
