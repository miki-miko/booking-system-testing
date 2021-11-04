import './ErrorBanner.css';

import { useDispatch } from 'react-redux';
import { discardError, fetchAllTables } from '../../store/actions';

interface Props {
  message: string;
}

const ErrorBanner: React.FC<Props> = ({ message }) => {
  // Redux

  const dispatch = useDispatch();

  return (
    <div className="ErrorBanner">
      <span className="ErrorBanner__message">{message}</span>
      <button
        type="button"
        className="ErrorBanner__retry"
        onClick={() => dispatch(fetchAllTables())}
      >
        Retry
      </button>
      <button
        type="button"
        className="ErrorBanner__close"
        onClick={() => dispatch(discardError())}
      >
        X
      </button>
    </div>
  );
};

export default ErrorBanner;
