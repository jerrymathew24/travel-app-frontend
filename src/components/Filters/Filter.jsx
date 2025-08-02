import { useFilter } from "../../context/filter-context";
import Ratings from "../Ratings";
import FreeCancellation from "./FreeCancellation";
import PriceRange from "./PriceRange";
import PropertyType from "./PropertyType";
import RoomsAndBeds from "./RoomsAndBeds";

const Filter = () => {

    const {filterDispatch} = useFilter()

    const handleFilterModalCloseClick =()=>{
        filterDispatch({
            type: "SHOW_FILTER_MODAL"
        })
    }

    const handleClearFilterClick =()=>{
        filterDispatch({
            type:"CLEAR_ALL"
        })
    }
    return (
        <div className="fixed inset-0 z-50 text-gray-800">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 m-8 bg-white mx-auto w-fit p-8 max-h-[90vh] overflow-y-auto overflow-x-hidden rounded">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-xl">Filter</span>
                    <button onClick={handleFilterModalCloseClick}  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-200">
                        <span className="material-icons-outlined">close</span>
                    </button>
                </div>
                <PriceRange />
                <RoomsAndBeds />
                <PropertyType />
                <Ratings />
                <FreeCancellation />
                <div className="flex justify-between py-2">
                    <button className="cursor-pointer border-b border-b-black" onClick={handleClearFilterClick}>Clear All</button>
                    <button className="cursor-pointer p-[.5rem] w-30 rounded-[.2rem] bg-blue-500" onClick={handleFilterModalCloseClick} >Apply</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
