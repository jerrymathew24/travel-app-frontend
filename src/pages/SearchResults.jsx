import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDate } from "../context/date-context";
import { useCategory } from '../context/category-context';
import HotelCard from '../components/HotelCard';
import axios from "axios";

const SearchResults = () => {

    const { destination } = useDate()
    const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();


    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`https://travel-app-backend-lsj1.onrender.com/api/hotels?category=${hotelCategory}`);
                setHotels(data);
            } catch (error) {
                console.error("Failed to fetch hotels:", error);
            }
        })();
    }, [destination]);

    const filteredSearchResults = hotels.filter(({ city, address, state }) =>
        address.toLowerCase() === destination.toLowerCase() ||
        city.toLowerCase() === destination.toLowerCase() ||
        state.toLowerCase() === destination.toLowerCase());

    return (
        <>
            <Navbar />
            <section className="mt-28 p-4 flex flex-wrap justify-center gap-6">
                {
                    filteredSearchResults ? (
                        filteredSearchResults.map((hotel)=>(
                            <HotelCard key={hotel._id} hotel={hotel} />
                        ))
                    ) : (
                        <h3>Nothing found here</h3>
                    )
                }
            </section>
        </>
    )
}
export default SearchResults;