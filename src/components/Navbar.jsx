import { Link } from "react-router-dom";
import { useDate } from "../context/date-context";

const Navbar = () => {

    const { destination, checkInDate, checkOutDate, guests, dateDispatch } = useDate();

    const onSearchClick = () => {
        dateDispatch({
            type: "OPEN_SEARCH_MODAL",
        })
    }

    return (
        <nav className="bg-white border-b-1 border-gray-300 fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0 text-4xl font-bold text-blue-600 cursor-pointer">
                        <Link to="/">TravelO</Link>
                    </div>

                    {/* Nav spans */}
                    <div className="hidden md:flex space-x-2 cursor-pointer text-xs bg-white h-8 items-center justify-center rounded-md shadow-md m-4 pl-4" onClick={onSearchClick}>
                        <span
                            to="/"
                            className="text-gray-700 hover:text-blue-600 transition duration-200 pr-2 border-r border-gray-300"
                        >
                            {destination || "Any Where"}
                        </span>
                        <span
                            to="/"
                            className="text-gray-700 hover:text-blue-600 transition duration-200 pr-2 border-r border-gray-300"
                        >
                            {checkInDate && checkOutDate ? `${checkInDate.toLocaleDateString("en-US", { day: "numeric", month: "short" })} - ${checkOutDate.toLocaleDateString("en-US", { day: "numeric", month: "short" })}` : "Any Week"}
                        </span>
                        <span
                            to="/"
                            className="text-gray-700 hover:text-blue-600 transition duration-200 "
                        >
                            {guests > 0 ? `${guests} guests` : "Any Guests"}
                        </span>
                        <span
                            to="/"
                            className="material-symbols-outlined flex items-center justify-center text-white h-full  transition duration-200 bg-blue-600 px-1 pt-1"
                        >
                            search
                        </span>
                    </div>
                    

                    <div className="flex items-center space-x-4">
                        <button>
                            <span className="material-symbols-outlined text-gray-700 cursor-pointer">
                                home
                            </span>
                        </button>
                        <button>
                            <span className="material-symbols-outlined text-gray-700 cursor-pointer">
                                account_circle
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;