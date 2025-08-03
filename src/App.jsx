import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleHotel from './pages/SingleHotel';
import SearchResults from './pages/SearchResults';
import Filter from './components/Filters/Filter';
import  Wishlist  from './pages/Wishlist';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='hotels/:name/:address/:state/:id/reserve' element={<SingleHotel />} />
        <Route path='hotels/:address' element={<SearchResults />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}
export default App;