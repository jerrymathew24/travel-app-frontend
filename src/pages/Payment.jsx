import { useNavigate, useParams, Link } from "react-router-dom";
import { useDate } from "../context/date-context";
import { useHotel } from "../context/hotel-context";
import { useEffect, useState, Fragment } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const Payment = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const { guests, checkInDate, checkOutDate } = useDate();
  const { setHotel } = useHotel();

  const numberOfNights = checkInDate && checkOutDate
    ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
    : 0;

  const [singleHotel, setSingleHotel] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://travel-app-backend-lsj1.onrender.com/api/hotels/${id}`);
        setSingleHotel(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const { image, name, address, state, rating, price } = singleHotel;
  const totalPayableAmount = price * numberOfNights + 150;

  const loadScript = (source) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleConfirmBookingClick = async () => {
    const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!response) return console.log("Razorpay SDK failed to load");

    const options = {
      key: "rzp_test_jptkYmRlh3dK8K",
      amount: totalPayableAmount * 100,
      currency: "INR",
      name: "TravelO",
      email: "jerry@mail.com",
      contact: "8281897063",
      description: "Thank you for booking with us",
      handler: ({ payment_id }) => {
        setHotel({
          ...singleHotel,
          orderId: uuid(),
          payment_id,
          checkInDate: checkInDate.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
          checkOutDate: checkOutDate.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
          totalPayableAmount
        });
        navigate("/order-summary");
      },
      prefill: {
        name: "Jerry Mathew",
        email: "jerry@gail.com",
        contact: "8281897063",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <header className="p-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">TravelO</Link>
        </h1>
      </header>

      <main className="flex flex-col lg:flex-row justify-center p-6 gap-10">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h2 className="text-xl font-semibold">Trip Details</h2>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium">Your Trip</h3>
            <div>
              <p className="text-sm text-gray-600">Dates</p>
              <span className="text-gray-800">
                {checkInDate.toLocaleDateString("en-US", { day: "numeric", month: "short" })} -
                {checkOutDate.toLocaleDateString("en-US", { day: "numeric", month: "short" })}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Guests</p>
              <span className="text-gray-800">{guests} Guests</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Pay with</h3>
            <div className="text-gray-700">Razorpay</div>
          </div>

          <button
            onClick={handleConfirmBookingClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-fit"
          >
            Confirm Booking
          </button>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="flex gap-4">
            <img className="w-32 h-24 object-cover rounded" src={image} alt={name} />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">{name}</span>
              <span className="text-sm text-gray-600">{address}, {state}</span>
              <div className="flex items-center mt-1 text-yellow-500">
                <span className="material-icons-outlined text-sm">star</span>
                <span className="ml-1 text-sm">{rating}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-md text-sm">
            Your booking is protected by <strong className="text-blue-800">TravelO</strong> cover
          </div>

          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-4">Price Details</h3>
            <div className="flex justify-between">
              <span>Rs. {price} x {numberOfNights} nights</span>
              <span>Rs. {price * numberOfNights}</span>
            </div>
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>Rs. 200</span>
            </div>
            <div className="flex justify-between font-semibold mt-2">
              <span>Total</span>
              <span>Rs. {totalPayableAmount}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Payment;