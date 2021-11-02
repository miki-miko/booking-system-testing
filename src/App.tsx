// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavbarCustom from './components/Navbar/Navbar';

// Pages
import Booking from './pages/Booking';
import Home from './pages/Home';

// React
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { fetchAllTables } from './store/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTables());
  }, [dispatch]);

  return (
    <Router>
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
    </Router>
  );
};

export default App;
