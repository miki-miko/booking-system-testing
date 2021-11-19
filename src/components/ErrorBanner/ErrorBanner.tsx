import { useDispatch, useSelector } from "react-redux";
import {
  discardError,
  fetchAllTables,
  filterTables,
  errorSelector,
} from "../../store/slices/tablesSlice";
import Alert from "react-bootstrap/esm/Alert";
import Button from "react-bootstrap/esm/Button";
import { ErrorBannerProps } from "../../Interfaces";

const ErrorBanner: React.FC<ErrorBannerProps> = ({
  message,
  handleErrorBanner,
}) => {
  const dispatch = useDispatch();

  const error = useSelector(errorSelector);

  let cleanArray: any[] = [];

  const handleClose = () => {
    dispatch(filterTables(cleanArray));
    handleErrorBanner(false);
    dispatch(fetchAllTables());
    dispatch(discardError());
  };

  return (
    <>
      {error ? (
        <Alert variant="warning">
          <Button variant="warning" onClick={handleClose}>
            X
          </Button>
          <Alert.Heading>{message}</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default ErrorBanner;
