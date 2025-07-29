const HotelDetails = ({ singleHotel }) => {
  if (!singleHotel) return null;

  const {
    name,
    category,
    price,
    rating,
    address,
    city,
    state,
    country,
    hostName,
    hostJoinedOn,
    numberOfguest,
    numberOfBedrooms,
    numberOfBeds,
    numberOfBathrooms,
    ameneties = [],
    healthAndSafety = [],
    houseRules = [],
    propertyType,
    isCancelable,
  } = singleHotel;

  return (
    <div className="p-8 space-y-8  w-full">
      {/* Basic Info */}
      <section>
        <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
        <p className="text-sm text-gray-500">{category} · {propertyType}</p>
        <p className="text-gray-700 mt-1">
          {address}, {city}, {state}, {country}
        </p>
        <p className="text-lg font-semibold mt-2 text-gray-800">₹{price} / night</p>
        <p className="text-sm text-yellow-600 mt-1">⭐ {rating} / 5</p>
      </section>

      {/* Host Info */}
      <section className="border-t pt-4 border-gray-400">
        <h2 className="text-xl font-medium mb-1 text-gray-800">Hosted by {hostName}</h2>
        <p className="text-sm text-gray-500">Joined on {hostJoinedOn}</p>
      </section>

      {/* Capacity */}
      <section className="border-t pt-4 border-gray-400">
        <h2 className="text-lg font-medium mb-2 text-gray-800">Property Details</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Guests: {numberOfguest}</li>
          <li>Bedrooms: {numberOfBedrooms}</li>
          <li>Beds: {numberOfBeds}</li>
          <li>Bathrooms: {numberOfBathrooms}</li>
        </ul>
      </section>

      {/* Amenities */}
      <section className="border-t pt-4 border-gray-400">
        <h2 className="text-lg font-medium mb-2 text-gray-800">Amenities</h2>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {ameneties.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Health and Safety */}
      <section className="border-t pt-4 border-gray-400">
        <h2 className="text-lg font-medium mb-2 text-gray-800">Health & Safety</h2>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {healthAndSafety.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* House Rules */}
      <section className="border-t pt-4 border-gray-400">
        <h2 className="text-lg font-medium mb-2 text-gray-800">House Rules</h2>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {houseRules.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Booking Policy */}
      <section className="border-t pt-4 border-gray-400">
        <h2 className="text-lg font-medium mb-2 text-gray-800">Booking Policy</h2>
        <p className="text-sm text-gray-700">
          {isCancelable ? "✅ Free cancellation available" : "❌ Non-refundable"}
        </p>
      </section>
    </div>
  );
};

export default HotelDetails;
