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

  const isLoading: boolean = useSelector(loadingSelector);

  const [showFormModal, setShowFormModal] = useState(false);
  const [notAvailable, setNotAvailable] = useState(false);
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

  const closeForm = () => {
    setNewTable(null);
    setShowFormModal(false);
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

  const renderErrorMessage = () => {
    dispatch(triggerError());
    setNotAvailable(true);
  };

  return (
    <Container className="main">
      <div className={"PostsContainer"}>
        <Container className="row-container">
          <Row>
            <TableFilter handleTables={renderErrorMessage} />
            <Col className="flex">
              {notAvailable ? (
                <ErrorBanner
                  handleErrorBanner={setNotAvailable}
                  message={"tables not available"}
                />
              ) : isLoading ? (
                <Loader />
              ) : filteredTables.length > 0 ? (
                filteredTables.map((table: TableI, index: number) => (
                  <Table key={index} table={table} />
                ))
              ) : (
                Array.isArray(tables) &&
                tables.map((table: TableI, index: number) => (
                  <Table key={index} table={table} />
                ))
              )}
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
