import { useEffect, useState } from "react";
import { useCategory } from "../context/category-context";
import { useDate } from "../context/date-context";
import DateSelector from "./DateSelector";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SearchStayWithDate = () => {

    const [hotels, setHotels] = useState([]);
    const { destination, guests, dateDispatch, isSearchResultOpen } = useDate();
    const { hotelCategory } = useCategory();
    const navigate = useNavigate()

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

    const handleDestinationChange = (event) => {
        dateDispatch({
            type: "DESTINATION",
            payload: event.target.value
        })
    }

    const handleGuestChange = (event) => {
        dateDispatch({
            type: "GUESTS",
            payload: event.target.value
        })
    }

    const handleSearchResultClick = (address) => {
        dateDispatch({
            type: "DESTINATION",
            payload: address
        })
    }

    const handleDestinationFocus =()=>{
        dateDispatch({
             type: "SHOW_SEARCH_RESULT"
        })
    }

    const handleSearchButtonClick =()=>{
        dateDispatch({
            type: "CLOSE_SEARCH_MODAL"
        })
        navigate(`hotels/${destination}`)
    }

    const destinationOptions = hotels.filter(({ address, city, state, country }) =>
        address.toLowerCase().includes(destination.toLowerCase()) ||
        city.toLowerCase().includes(destination.toLowerCase()) ||
        state.toLowerCase().includes(destination.toLowerCase()) ||
        country.toLowerCase().includes(destination.toLowerCase()))

    return (
        <div className="fixed inset-0 z-50">
            <div className="absolute z-1 inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 m-[2rem] bg-white shadow-lg p-1 mx-auto mt-20 w-fit">
                <div className="flex flex-wrap">
                    <div>
                        <label className="block pb-1 text-sm font-medium text-center">Where</label>
                        <input
                            value={destination}
                            onChange={handleDestinationChange}
                            onFocus={handleDestinationFocus}
                            autoFocus
                            className="focus:outline-none border-none"
                            type="text"
                            placeholder="Search Destination"
                        />
                    </div>
                    <div>
                        <label className="block pb-1 text-sm font-medium text-center">Check in</label>
                        <DateSelector checkInType="in" />
                    </div>
                    <div>
                        <label className="block pb-1 text-sm font-medium text-center">Check out</label>
                        <DateSelector checkInType="out" />
                    </div>
                    <div>
                        <label className="block pb-1 text-sm font-medium text-center">No. of Guests</label>
                        <input
                            value={guests}
                            onChange={handleGuestChange}
                            className="focus:outline-none border-none text-center w-40"
                            type="text"
                            placeholder="Add Guests"
                        />
                    </div>
                    <div className="flex items-end" onClick={handleSearchButtonClick}>
                        <button className="flex  h-full w-full p-3 bg-blue-600 text-white hover:bg-blue-700 transition">
                            <span className="material-icons-outlined">search</span>
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>

            {
                isSearchResultOpen && (<div className="relative z-10 bg-white w-[25rem] max-h-[20rem] overflow-y-auto ml-[5.5rem] shadow rounded">
                    {
                        destinationOptions && destinationOptions.map(({ address, city }, index) => (
                            <p
                                onClick={() => handleSearchResultClick(address)}
                                key={index} className="p-3 hover:bg-blue-100 cursor-pointer">
                                {address}, {city}
                            </p>
                        ))
                    }
                </div>)
            }

        </div>
    );
};

export default SearchStayWithDate;
