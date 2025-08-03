import { useNavigate } from "react-router-dom";
import { useDate } from "../context/date-context";
import { useFilter } from "../context/filter-context";
import { useHotel } from "../context/hotel-context";
import { useWishlist } from "../context/wishlist-context";

const OrderSummary = () => {
    const navigate = useNavigate();
    const { dateDispatch } = useDate();
    const { filterDispatch } = useFilter();
    const { hotel } = useHotel();
    const { wishlistDispatch } = useWishlist()

    const {
        orderId,
        name,
        image,
        city,
        state,
        checkInDate,
        checkOutDate,
        totalPayableAmount,
    } = hotel;

    const handleContinueBookingClick = () => {
        dateDispatch({ type: "CLEAR_INPUTS" });
        filterDispatch({ type: "CLEAR_ALL" });
        wishlistDispatch({ type: "CLEAR_WISHLIST" });
        navigate("/");
    };

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-2">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <button
                    className="text-red-500 hover:text-red-700 p-2 rounded-full"
                    onClick={handleContinueBookingClick}
                >
                    <span className="material-icons-outlined">close</span>
                </button>
            </div>

            <span className="text-sm text-gray-600">Booking ID: {orderId}</span>

            <div className="flex items-center justify-between border-b py-2">
                <div className="flex flex-col">
                    <span className="text-base font-medium">{name}</span>
                    <span className="text-sm text-gray-500">{city}, {state}</span>
                </div>
                <img className="w-24 h-16 object-cover rounded" src={image} alt={name} />
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Check In</span>
                    <p className="text-base text-gray-800">{checkInDate}, 11:00 AM</p>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-600">Check Out</span>
                    <p className="text-base text-gray-800">{checkOutDate}, 11:00 AM</p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Amount Paid</span>
                    <p className="text-base font-medium text-gray-800">Rs. {totalPayableAmount}</p>
                </div>
            </div>

            <div className="mt-4">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded w-full"
                    onClick={handleContinueBookingClick}
                >
                    Continue Booking
                </button>
            </div>
        </div>
    );
};
export default OrderSummary;