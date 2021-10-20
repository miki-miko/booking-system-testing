import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table/Table';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTables } from './store/actions';
import { RootState } from './store/reduxStore';
import TableFilters, { tableI } from './components/TableFilter/TableFilter';
import NavbarCustom from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';

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
      <Container>
        <NavbarCustom />
        <TableFilters />
        {filteredTables.length > 0 && (
          <Container className="border border-primary">
            {filteredTables &&
              filteredTables.map((tableInfo: any, index: any) => (
                <Table key={index} table={tableInfo} />
              ))}
          </Container>
        )}
      </Container>
    </div>
  );
};

export default App;
