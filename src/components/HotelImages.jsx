const HotelImages = ({ singleHotel }) => {
  if (!singleHotel) return null;

  const { image, imageArr = [] } = singleHotel;

  return (
    <div className="flex gap-1  h-[24rem]">
      {/* Primary image - takes ~66% width */}
      <div className="w-2/4 h-full">
        <img
          src={image}
          alt="hotel primary"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - 4 small images in 2 rows */}
      <div className="w-2/4 flex flex-wrap gap-1">
        {imageArr.map((img) => (
          <div key={img} className="w-[calc(50%-2px)] h-[49%]">
            <img
              src={img}
              alt={`hotel`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelImages;
