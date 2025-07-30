import PriceRange from "./PriceRange";
import RoomsAndBeds from "./RoomsAndBeds";

const Filter = () => {
    return (
        <>
            <div className="fixed inset-0 z-50 text-gray-800">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 m-[2rem] bg-white  mx-auto mt-2 w-fit p-20">
                    <div className="flex justify-between">
                        <span className="font-medium text-xl">Filter</span>
                        <button>
                            <span className="material-icons-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <PriceRange />
                    <RoomsAndBeds/>
                </div>
            </div>
        </>
    )
}

export default Filter;