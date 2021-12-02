import { useDispatch, useSelector } from "react-redux";
import {
  discardError,
  fetchAllTables,
  filterTables,
  errorSelector,
} from "../../store/slices/tablesSlice";

import { Button, Alert } from "react-bootstrap";

import { ErrorBannerProps } from "../../Interfaces";

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message }) => {
  const dispatch = useDispatch();

  const error = useSelector(errorSelector);

  let cleanArray: any[] = [];

  const handleClose = () => {
    dispatch(filterTables(cleanArray));

    dispatch(fetchAllTables());
    dispatch(discardError());
  };

  return (
    <>
      <div>
        {error ? (
          <Alert variant="warning">
            <Button
              variant="warning"
              onClick={handleClose}
              aria-label="close-button"
            >
              X
            </Button>
            <Alert.Heading>{message}</Alert.Heading>
          </Alert>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ErrorBanner;
