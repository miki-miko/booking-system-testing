import './App.css';
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTables } from './store/actions';
import { RootState } from './store/reduxStore';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const tables = useSelector((state: RootState) => state.tables);

  useEffect(() => {
    dispatch(fetchAllTables());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <div className={'TablesContainer'}>
        {tables.map((tableInfo: any) => (
          <Table table={tableInfo} />
        ))}
      </div>
    </div>
  );
};

export default App;
