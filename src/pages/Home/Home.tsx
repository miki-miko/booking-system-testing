// CSS
import "./Home.css";
import { Button, Container, Row, Col } from "react-bootstrap";

// Component
import Table from "../../components/Table/Table";
import TableFilter from "../../components/TableFilter/TableFilter";
import TableForm from "../../components/TableForm/TableForm";

// React
import { useState } from "react";
import { NewTableI, TableI } from "../../Interfaces";

// Redux
import { useDispatch, useSelector } from "react-redux";

import {
  addTable,
  errorSelector,
  filteredTablesSelector,
  loadingSelector,
  tablesSelector,
  triggerError,
} from "../../store/slices/tablesSlice";

import Loader from "../../components/Loader/Loader";
import ErrorBanner from "../../components/ErrorBanner/ErrorBanner";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const tables: TableI[] = useSelector(tablesSelector);

  const filteredTables: TableI[] = useSelector(filteredTablesSelector);
  const error: boolean = useSelector(errorSelector);

  const isLoading: boolean = useSelector(loadingSelector);

  const [showFormModal, setShowFormModal] = useState(false);
  // const [notAvailable, setNotAvailable] = useState(false);

  const [newTable, setNewTable] = useState<NewTableI | null>();

  // // functions

  const addNewTable = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (checkTableForm() && newTable) {
      dispatch(addTable(newTable));
    } else {
      throw new Error("Form not Valid");
    }
  };

  const checkTableForm = () =>
    newTable?.name &&
    newTable?.location &&
    newTable?.imageUrl &&
    Number.parseInt(newTable?.capacity) >= 0;

  const onInputChange = (e: { target: { name: string; value: string } }) => {
    setNewTable((table) => ({
      ...table!,
      [e.target.name]: e.target.value,
    }));
  };

  const closeForm = () => {
    setNewTable(null);
    setShowFormModal(false);
  };

  const renderErrorMessage = () => {
    dispatch(triggerError());
  };

  return (
    <Container className="main">
      <TableFilter handleTables={renderErrorMessage} />
      <Row>
        <Col className="main-container">
          {error ? (
            <ErrorBanner message={"tables not available"} />
          ) : isLoading ? (
            <Loader />
          ) : filteredTables.length > 0 ? (
            filteredTables.map((table: TableI, index: number) => (
              <Table key={index} table={table} />
            ))
          ) : (
            Array.isArray(tables) &&
            tables.map((table: TableI, index: number) => (
              <Table key={index} table={table} aria-label="card" />
            ))
          )}
        </Col>
      </Row>

      <TableForm
        show={showFormModal}
        handleClose={closeForm}
        onInputChange={onInputChange}
        addPost={addNewTable}
      />

      <Button
        className={"addButton"}
        size={"lg"}
        variant={"primary"}
        onClick={() => setShowFormModal(true)}
      >
        +
      </Button>
    </Container>
  );
};

export default Home;
