const FinalPrice = ({singleHotel}) =>{

    const { price, rating } = singleHotel || {};
return(
    <div className=" w-[30vw] text-gray-900 p-7  max-w-md shadow-2xl  space-y-4 h-[26rem] mt-14">
  {/* Price and rating */}
  <div className="flex items-center justify-between">
    <span className="text-2xl font-semibold">
      ₹{price} <span className="text-sm font-normal">/ night</span>
    </span>
    <span className="text-sm text-yellow-600">⭐ {rating}</span>
  </div>

  {/* Date pickers */}
  <div className="flex flex-col sm:flex-row gap-2 ">
    <div className="flex-1">
      <label className="block text-sm mb-1 text-gray-600">Check-in</label>
      <input
        type="date"
        className="w-full border border-gray-400 rounded px-3 py-2 text-sm"
      />
    </div>
    <div className="flex-1">
      <label className="block text-sm mb-1 text-gray-600">Check-out</label>
      <input
        type="date"
        className="w-full border border-gray-400 rounded px-3 py-2 text-sm"
      />
    </div>
  </div>

  {/* Guest input */}
  <div>
    <label className="block text-sm mb-1 text-gray-600">Guests</label>
    <input
      type="number"
      min={1}
      className="w-full border border-gray-400 rounded px-3 py-2 text-sm"
    />
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
      <span>₹{price*2 + 250}</span>
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