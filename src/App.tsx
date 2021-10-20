import './App.css';
import Navbar from './components/Navbar/Navbar';
import Table from './components/Navbar/Navbar';

import { Key, useEffect } from 'react';
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
        {tables.map((tableInfo: { id: Key | null | undefined }) => (
          <Table table={tableInfo} key={tableInfo.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
