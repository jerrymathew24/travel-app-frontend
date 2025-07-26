import { useEffect, useState } from 'react';
import axios from 'axios';
import HotelCard from '../components/HotelCard';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://travel-app-backend-lsj1.onrender.com/api/hotels");
        setHotels(data);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Categories />
      <main className="mt-28 p-4 flex flex-wrap justify-center gap-6">
        {hotels.map(hotel => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </main>
    </>
  );
};

export default Home;
