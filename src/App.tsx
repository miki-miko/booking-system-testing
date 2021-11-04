// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavbarCustom from './components/Navbar/Navbar';
import ErrorBanner from './components/ErrorBanner/ErrorBanner';

// Pages
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home';

// React
import { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTables } from './store/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const tablesError = useSelector((state: any) => state.tables.error);

  useEffect(() => {
    dispatch(fetchAllTables());
  }, [dispatch]);

  return (
    <div className="App">
      <NavbarCustom />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
      </Switch>
      {tablesError ? <ErrorBanner message={tablesError.message} /> : null}
    </div>
  );
};

export default App;
