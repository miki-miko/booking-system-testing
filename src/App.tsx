// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

// Components
import NavbarCustom from './components/Navbar/Navbar';
import Table from './components/Table/Table';
import TableFilters, { tableI } from './components/TableFilter/TableFilter';
import TableForm from './components/TableForm/TableForm';

// React
import { useEffect, useState } from 'react';
import { newTableI } from './Interfaces';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTable, fetchAllTables } from './store/actions';
import { RootState } from './store/reduxStore';

import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [newTable, setNewTable] = useState<newTableI | null>();

  const dispatch = useDispatch();

  const tables = useSelector((state: RootState) => state.tables);

  const filteredTables: tableI[] = useSelector(
    (state: RootState) => state.tablesFiltered
  );

  useEffect(() => {
    dispatch(fetchAllTables());
  }, [dispatch]);

  // functions

  const closeForm = () => {
    setNewTable(null);
    setShowFormModal(false);
  };

  const checkForm = () =>
    newTable?.table.name &&
    newTable?.table.location &&
    newTable?.table.imageUrl &&
    newTable?.table.capacity >= 0;

  const onInputChange = (e: any) => {
    setNewTable((table: any) => ({
      ...table,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewTable = async (e: any) => {
    e.preventDefault();
    if (checkForm()) {
      dispatch(addTable(newTable));
    } else {
      throw new Error('Form not Valid');
    }
  };

  return (
    <div className="App" data-testid="test">
      <NavbarCustom />
      <Container className="main">
        <div className={'PostsContainer'}>
          <Container className="row-container">
            <Row>
              <TableFilters />
              <Col className="flex">
                {filteredTables.length > 0
                  ? filteredTables.map((table: any, index: any) => (
                      <Table key={index} table={table} />
                    ))
                  : tables &&
                    tables.map((table: any, index: any) => (
                      <Table key={index} table={table} />
                    ))}
              </Col>
            </Row>
          </Container>
        </div>
        <TableForm
          // table={newTable}
          show={showFormModal}
          handleClose={closeForm}
          onInputChange={onInputChange}
          addPost={addNewTable}
        />

        <Button
          className={'addButton'}
          size={'lg'}
          variant={'primary'}
          onClick={() => setShowFormModal(true)}
        >
          +
        </Button>
      </Container>
    </div>
  );
}

export default App;
