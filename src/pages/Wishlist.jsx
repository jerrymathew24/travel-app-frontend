import HotelCard from "../components/HotelCard";
import Navbar from "../components/Navbar";
import { useWishlist } from "../context/wishlist-context";



const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <>
      <Navbar />
      <h2 className="heading-2 bg-amber-300">Your Wishlist</h2>
      <section className="mt-28 p-4 flex flex-wrap justify-center gap-6" >
        {wishlist &&
          wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </section>
    </>
  );
};

export default Wishlist;