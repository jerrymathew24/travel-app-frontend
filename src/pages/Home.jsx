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
import { getHotelsByRoomsAndBeds } from '../utils/room-beds';
import { getHotelsByPropertyType } from '../utils/property';
import { getHotelsByRatings } from '../utils/rating';
import { getHotelsByCancelation } from '../utils/hotel-cancel';
import { useAuth } from '../context/auth-context';
import AuthModal from '../components/AuthModal';

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  const { isSearchModalOpen } = useDate();
  const { isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, traveloRating, isCancelable } = useFilter();
  const { isAuthModalOpen } = useAuth()


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

  const filteredHotelsByPrice = hotels.filter(hotel => hotel.price >= priceRange[0] && hotel.price <= priceRange[1])
  const filteredHotelsByBedsAndRooms = getHotelsByRoomsAndBeds(filteredHotelsByPrice, noOfBathrooms, noOfBedrooms, noOfBeds)

  const filteredHotelsByPropertyType = getHotelsByPropertyType(filteredHotelsByBedsAndRooms, propertyType)

  const filteredHotelsByRatings = getHotelsByRatings(filteredHotelsByPropertyType, traveloRating)

  const filteredHotelsByCancelation = getHotelsByCancelation(filteredHotelsByRatings, isCancelable)

  return (
    <>
      <Navbar />
      <Categories />
      <main className="mt-28 p-4 flex flex-wrap justify-center gap-6">
        {filteredHotelsByCancelation && filteredHotelsByCancelation.map(hotel => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </main>
      {
        isSearchModalOpen && <SearchStayWithDate />
      }
      {
        isFilterModalOpen && <Filter />
      }
      {
        isAuthModalOpen && <AuthModal />
      }
    </>
  );
};

export default Home;
