export const getHotelsByPropertyType = (hotels, propertyType) => {
  if (propertyType === "Any") return hotels;
  const filterHotels = hotels.filter(
    (hotel) => hotel.propertyType === propertyType
  );
  return filterHotels;
};
