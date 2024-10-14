import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { getAllTasks } from './Api/ApiFunctions';
import { toDoContext } from './Context/projectContext';
import EditPage from './components/EditPage';
import Home from './components/Home';

function App() {
  //state
  const [tasks, setTasks] = useState([]);
  //functions
  const fetchTasks = async () => {
    try {
      const data = await getAllTasks();
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  //useEffect
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <toDoContext.Provider value={{ tasks, setTasks, fetchTasks }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:taskId' element={<EditPage />} />
        </Routes>
      </Router>
    </toDoContext.Provider>
  );
}

export default App;
