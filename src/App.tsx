// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

// Components
import NavbarCustom from './components/Navbar/Navbar';
import Table from './components/Table/Table';
import TableFilter, { tableI } from './components/TableFilter/TableFilter';
import TableForm from './components/TableForm/TableForm';

// React
import { useEffect, useState } from 'react';
import { newTableI } from './Interfaces';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTable, fetchAllTables } from './store/actions';
import { RootState } from './store/reduxStore';

const App: React.FC = () => {
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
    newTable?.name &&
    newTable?.location &&
    newTable?.imageUrl &&
    Number.parseInt(newTable?.capacity) >= 0;

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
    <div className="App">
      <NavbarCustom />
      <Container className="main">
        <div className={'PostsContainer'}>
          <Container className="row-container">
            <Row>
              <TableFilter />
              <Col className="flex">
                {filteredTables.length > 0
                  ? filteredTables.map((table: any, index: any) => (
                      <Table key={index} table={table} />
                    ))
                  : Array.isArray(tables) &&
                    tables.map((table: any, index: any) => (
                      <Table key={index} table={table} />
                    ))}
              </Col>
            </Row>
          </Container>
        </div>
        <TableForm
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
};

export default App;
