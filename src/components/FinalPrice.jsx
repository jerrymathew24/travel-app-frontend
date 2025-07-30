import { useDate } from "../context/date-context";
import DateSelector from "./DateSelector";

const FinalPrice = ({ singleHotel }) => {

  const { price, rating } = singleHotel || {};
  const { guests, dateDispatch } = useDate()

  const handleGuestChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value
    })
  }

  return (
    <div className=" w-[30vw] text-gray-900 p-7 shadow-2xl  space-y-4 h-[26rem] mt-14">
      {/* Price and rating */}
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">
          ₹{price} <span className="text-sm font-normal">/ night</span>
        </span>
        <span className="text-sm text-yellow-600">⭐ {rating}</span>
      </div>

      <div className="flex flex-col gap-4 text-xs text-center">
        <div className="flex-1">
          <label className="block mb-1 text-gray-600">Check-in</label>
          <DateSelector checkInType="in" />
        </div>
        <div className="flex-1">
          <label className="block mb-1 text-gray-600">Check-out</label>
          <DateSelector checkInType="out" />
        </div>
      </div>


      <div className="block text-sm mb-1 text-gray-600">
        {
          guests <= 0 ? (<input className="" type="number" placeholder="Add Guests" value={guests} onChange={handleGuestChange} />) : (
            <span>{guests} Guests</span>)
        }
      </div>

      {/* Fee breakdown */}
      <div className="border-t border-gray-400 pt-3 text-base text-gray-700 space-y-1">
        <div className="flex justify-between">
          <span>{price} X 2 nights</span>
          <span>{price * 2}</span>
        </div>
        <div className="flex justify-between">
          <span>Service fee</span>
          <span>₹250</span>
        </div>
        <div className="flex justify-between font-semibold border-t border-gray-400 pt-2">
          <span>Total</span>
          <span>₹{price * 2 + 250}</span>
        </div>
      </div>

      {/* Reserve button */}
      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"

      >
        Reserve
      </button>
    </div>

  )
}
export default FinalPrice