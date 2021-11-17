/* eslint-disable */
import { useDispatch, useSelector } from "react-redux";
import {
  discardError,
  fetchAllTables,
  filterTables,
} from "../../store/slices/tablesSlice";
import Alert from "react-bootstrap/esm/Alert";
import Button from "react-bootstrap/esm/Button";
import { RootState } from "../../store/reduxStore";

interface ErrorBannerProps {
  message: string;
  handleErrorBanner?: (b: boolean) => void;
}
const ErrorBanner: React.FC<ErrorBannerProps> = ({
  message,
  handleErrorBanner,
}) => {
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.tables.error);

  let cleanArray: any[] = [];

  const handleClose = () => {
    dispatch(filterTables(cleanArray));
    handleErrorBanner ? handleErrorBanner(false) : "";
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
