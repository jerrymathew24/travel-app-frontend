import { useEffect, useState } from 'react';
import axios from 'axios';
import HotelCard from '../components/HotelCard';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import { useCategory } from '../context/category-context';
import SearchStayWithDate from '../components/SearchStayWithDate';
import { useDate } from '../context/date-context';
import { useFilter } from '../context/filter-context';
import Filter from '../components/Filters/Filter';

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  const { isSearchModalOpen } = useDate();
  const { isFilterModalOpen, priceRange } = useFilter();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://travel-app-backend-lsj1.onrender.com/api/hotels?category=${hotelCategory}`);
        setHotels(data);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      }
    })();
  }, [hotelCategory]);

  const filteredHotelsByPrice = hotels.filter( hotel=> hotel.price >= priceRange[0] && hotel.price <= priceRange[1])

  return (
    <>
      <Navbar />
      <Categories />
      <main className="mt-28 p-4 flex flex-wrap justify-center gap-6">
        { filteredHotelsByPrice &&   filteredHotelsByPrice.map(hotel => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </main>
      {
        isSearchModalOpen && <SearchStayWithDate />
      }
      {
        isFilterModalOpen && <Filter/>
      }
    </>
  );
};

export default Home;
