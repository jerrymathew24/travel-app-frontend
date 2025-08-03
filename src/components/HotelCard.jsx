import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/wishlist-context";
import { findHotelInWishlist } from "../utils/find-hotel-in-wishlist";
import { useAuth } from "../context/auth-context";

const HotelCard = ({ hotel }) => {

  const { _id, name, image, address, rating, state, price } = hotel;

  const { wishlistDispatch, wishlist } = useWishlist();

  const { accessToken, authDispatch } = useAuth()


  const isHotelInWishlist = findHotelInWishlist(wishlist, _id);

  const navigate = useNavigate();

  const handleHotelCardClick = () => {
    navigate(`/hotels/${name}/${address}/${state}/${_id}/reserve`,);
  }

  const handleWishlistClick = () => {
    if (accessToken) {
      if (!isHotelInWishlist) {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: hotel,
        });
        navigate("/wishlist");
      } else {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: _id,
        });
      }
    } else {
      authDispatch({
        type: "SHOW_AUTH_MODAL",
      });
    }
  };


  return (
    <div className="relative w-[14rem] h-[17rem] bg-white shadow-md rounded-lg overflow-hidden">

      <div onClick={handleHotelCardClick}>
        {/* Image */}
        <div className="h-[10rem] w-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt={name}
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between px-2 pt-3">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-700">{address}, {state}</span>
              <span className="flex items-center space-x-1 text-gray-700 text-xs">
                <span className="material-symbols-outlined text-xs">star</span>
                <span>{rating}</span>
              </span>
            </div>
            <p className="text-blue-600 text-sm mt-1 mb-1">{name}</p>
          </div>

          {/* Price section */}
          <p className="text-xs text-gray-800">
            <span className="font-semibold mt-1">₹{price}</span>{" "}
            <span className="text-gray-700">/night</span>
          </p>
        </div>
      </div>
      {/* Heart icon button */}
      <button className="absolute top-2 right-2 p-2" onClick={handleWishlistClick}>
        <span
          className={`material-icons-outlined cursor-pointer ${isHotelInWishlist ? "text-red-500" : "text-white"}`}
        >
          favorite
        </span>
      </button>
    </div>
  );
};

export default HotelCard;
