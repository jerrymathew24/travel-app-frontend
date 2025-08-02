import { useFilter } from "../../context/filter-context.jsx";

const numbersOfAmenities = [null, 1, 2, 3, 4, 5]; // null means "Any"

const RoomsAndBeds = () => {
  const { filterDispatch, noOfBathrooms, noOfBedrooms, noOfBeds } = useFilter();

  const handleBedroomsClick = (number) => {
    filterDispatch({ type: "BEDROOMS", payload: number });
  };

  const handleBedsClick = (number) => {
    filterDispatch({ type: "BEDS", payload: number });
  };

  const handleBathroomsClick = (number) => {
    filterDispatch({ type: "BATHROOMS", payload: number });
  };

  const getLabel = (number) => (number === null ? "Any" : number === 5 ? "5+" : number);

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
          {/* Bedrooms */}
          <div className="flex gap-2 flex-wrap">
            {numbersOfAmenities.map((number) => (
              <span
                onClick={() => handleBedroomsClick(number)}
                key={`bedroom-${number}`}
                className={`px-4 py-1 rounded-md border text-sm cursor-pointer transition ${
                  noOfBedrooms === number
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-400 hover:bg-blue-100 hover:border-blue-500"
                }`}
              >
                {getLabel(number)}
              </span>
            ))}
          </div>

          {/* Beds */}
          <div className="flex gap-2 flex-wrap">
            {numbersOfAmenities.map((number) => (
              <span
                onClick={() => handleBedsClick(number)}
                key={`beds-${number}`}
                className={`px-4 py-1 rounded-md border text-sm cursor-pointer transition ${
                  noOfBeds === number
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-400 hover:bg-blue-100 hover:border-blue-500"
                }`}
              >
                {getLabel(number)}
              </span>
            ))}
          </div>

          {/* Bathrooms */}
          <div className="flex gap-2 flex-wrap">
            {numbersOfAmenities.map((number) => (
              <span
                onClick={() => handleBathroomsClick(number)}
                key={`bathrooms-${number}`}
                className={`px-4 py-1 rounded-md border text-sm cursor-pointer transition ${
                  noOfBathrooms === number
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-400 hover:bg-blue-100 hover:border-blue-500"
                }`}
              >
                {getLabel(number)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsAndBeds;
