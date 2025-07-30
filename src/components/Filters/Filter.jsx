import Ratings from "../Ratings";
import FreeCancellation from "./FreeCancellation";
import PriceRange from "./PriceRange";
import PropertyType from "./PropertyType";
import RoomsAndBeds from "./RoomsAndBeds";

const Filter = () => {
    return (
        <div className="fixed inset-0 z-50 text-gray-800">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 m-8 bg-white mx-auto w-fit p-8 max-h-[90vh] overflow-y-auto overflow-x-hidden rounded">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-xl">Filter</span>
                    <button>
                        <span className="material-icons-outlined">close</span>
                    </button>
                </div>
                <PriceRange />
                <RoomsAndBeds />
                <PropertyType />
                <Ratings />
                <FreeCancellation />
                <div className="flex justify-between py-2">
                    <button className="cursor-pointer border-b border-b-black">Clear All</button>
                    <button className="cursor-pointer p-[.5rem] w-30 rounded-[.2rem] bg-blue-500">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
