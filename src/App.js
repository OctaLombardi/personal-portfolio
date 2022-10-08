import './App.css';
import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import Proyects from './Pages/Proyects';
import Experience from './Pages/Experience';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='proyects' element={<Proyects />}></Route>
        <Route path='experience' element={<Experience />}></Route>
      </Routes>
    </div>
  );
}

export default App;
