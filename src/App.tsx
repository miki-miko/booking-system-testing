import './App.css';
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTables } from './store/actions';
import { RootState } from './store/reduxStore';
import TableFilters, { tableI } from './components/TableFilter/TableFilter';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const filteredTables: tableI[] = useSelector(
    (state: RootState) => state.tablesFiltered
  );

  useEffect(() => {
    dispatch(fetchAllTables());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <TableFilters />
      <div className="tables-container">
        {filteredTables &&
          filteredTables.map((tableInfo: any, index: any) => (
            <Table key={index} table={tableInfo} />
          ))}
      </div>
    </div>
  );
};

export default App;
