import AddTask from './components/modals/AddTask'
import EditTask from './components/modals/EditTask'
import './style/app.scss';
import {useSelector } from 'react-redux';
import Nav from './components/Nav';
import Todo from './components/columns/Todo';
import Doing from './components/columns/Doing';
import Done from './components/columns/Done';

function App() {

  const isAddModal = useSelector((state) => state.add);
  const isEditModal = useSelector((state) => state.editing);
  useSelector((state) => state.mainState);

  return (
    <div className="App">
      <Nav />
      <div className="taskPlatform">
        <Todo />
        <Doing />
        <Done />
      </div>
      {isAddModal && <AddTask />}
      {isEditModal && <EditTask />}
    </div>
  );
}

export default App;
