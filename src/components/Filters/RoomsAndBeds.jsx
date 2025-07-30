const numbersOfAmenities = ["Any", "1", "2", "3", "4", "5+"];

const RoomsAndBeds = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-medium text-2xl text-gray-800">Rooms and Beds</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col space-y-8 text-gray-700 text-base min-w-[100px]">
          <span>Bedrooms</span>
          <span>Beds</span>
          <span>Bathrooms</span>
        </div>

        <div className="flex flex-col space-y-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-2 flex-wrap">
              {numbersOfAmenities.map((number) => (
                <span
                  key={number}
                  className="px-4 py-1 rounded-md border border-gray-400 text-sm cursor-pointer hover:bg-blue-100 hover:border-blue-500 transition"
                >
                  {number}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsAndBeds;
