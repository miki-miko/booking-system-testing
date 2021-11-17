/* eslint-disable */

// CSS
import "./Home.css";
import { Button, Container, Row, Col } from "react-bootstrap";

// Component
import Table from "../../components/Table/Table";
import TableFilter from "../../components/TableFilter/TableFilter";
import TableForm from "../../components/TableForm/TableForm";

// React
import { useEffect, useState } from "react";
import { NewTableI, TableI } from "../../Interfaces";

// Redux
import { useDispatch, useSelector } from "react-redux";

import {
  addTable,
  tablesSelector,
  triggerError,
} from "../../store/slices/tablesSlice";

import Loader from "../../components/Loader/Loader";
import ErrorBanner from "../../components/ErrorBanner/ErrorBanner";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const tables: Array<TableI> = useSelector(tablesSelector);
  console.log(tables);

  const filteredTables: any = useSelector(
    (state: any) => state.tables.tablesFiltered
  );

  const isLoading = useSelector((state: any) => state.tables.loading);
  const [showFormModal, setShowFormModal] = useState(false);
  const [notAvailable, setNotAvailable] = useState(false);
  const [newTable, setNewTable] = useState<any>();

  // // functions

  const addNewTable = async (e: any) => {
    e.preventDefault();
    if (checkTableForm()) {
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

  const onInputChange = (e: any) => {
    setNewTable((table: any) => ({
      ...table,
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
                filteredTables.map((table: any, index: any) => (
                  <Table key={index} table={table} />
                ))
              ) : (
                Array.isArray(tables) &&
                tables.map((table: any, index: any) => (
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
