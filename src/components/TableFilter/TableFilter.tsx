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

  const locations: string[] = tables.map((table) => table.location);

  const uniq = [...new Set(locations)];

  const handleChange = (event: any) => {
    const filter: string = event.target.value;

    const filteredArr = tables.filter((table) => table.location === filter);
    // console.log(filteredArr);

    dispatch(filterTables(filteredArr));
  };

  return (
    <section className="filter-container">
      <h3>Select a table</h3>
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">Table location</label>
          <select
            name="type"
            id="type"
            placeholder=""
            onChange={handleChange}
            className="form-control"
          >
            <option value="" disabled selected>
              Select your location
            </option>
            {uniq &&
              uniq.map((location: string, index: number) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
          </select>
        </div>
      </form>
    </section>
  );
};

export default TableFilters;
