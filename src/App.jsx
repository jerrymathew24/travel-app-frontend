import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleHotel from './pages/SingleHotel';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='hotels/:name/:address/:state/:id/reserve' element={<SingleHotel />}/>
      </Routes>
    </div>
  );
}
export default App;