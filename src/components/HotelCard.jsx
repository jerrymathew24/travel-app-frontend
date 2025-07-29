import { useNavigate } from "react-router-dom";
const HotelCard = ({ hotel }) => {

  const { _id, name, image, address, rating, state, price } = hotel;

  const navigate = useNavigate();

  const onHotelCardClick = () => {
    navigate(`/hotels/${name}/${address}/${state}/${_id}/reserve`, );
  }

  return (
    <div onClick={onHotelCardClick} className="relative w-[14rem] h-[17rem] bg-white shadow-md rounded-lg overflow-hidden">
      {/* Heart icon button */}
      <button className="absolute top-2 right-2 p-2">
        <span
          className="material-symbols-outlined text-white cursor-pointer"
        >
          favorite
        </span>
      </button>

      {/* Image */}
      <div  className="h-[10rem] w-full overflow-hidden">
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
  );
};

export default HotelCard;
