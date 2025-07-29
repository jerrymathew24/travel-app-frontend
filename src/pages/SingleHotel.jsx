import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import HotelImages from "../components/HotelImages";
import HotelDetails from "../components/HotelDetails";
import FinalPrice from "../components/FinalPrice";

const SingleHotel = () => {

    const { id } = useParams();
    console.log("SingleHotel ID:", id);
    const [singleHotel, setSingleHotel] = useState();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`https://travel-app-backend-lsj1.onrender.com/api/hotels/${id}`);
                setSingleHotel(data);
            } catch (error) {
                console.log("Error fetching hotel details:", error);
            }
        })()
    }, [id])

    const { name, state } = singleHotel || {};
    return (
        <>
            <Navbar />
            <main className="pt-[7rem] pr-[3rem] pb-0 pl-[4rem]">
                {!singleHotel ? (
                    <p>Loading hotel details...</p>
                ) : (
                    <>
                        <p className="text-2xl text-gray-600 pb-1.5">{name}, {state}</p>
                        <HotelImages singleHotel={singleHotel} />
                    </>
                )}
                <div className="flex justify-between mt-16">
                    <HotelDetails singleHotel={singleHotel} />
                    <FinalPrice singleHotel={singleHotel} />
                </div>
            </main>
        </>
    )
}
export default SingleHotel;