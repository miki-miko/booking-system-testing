// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavbarCustom from './components/Navbar/Navbar';

// Pages
import Booking from './pages/Booking/Booking';
import Home from './pages/Home/Home';

// React
import { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { fetchAllTables } from './store/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

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
    </div>
  );
};

export default App;
