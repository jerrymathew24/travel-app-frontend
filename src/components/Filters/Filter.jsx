import PriceRange from "./PriceRange";

const Filter = () => {
    return (
        <>
            <div className="fixed inset-0 z-50 text-gray-700">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 m-[2rem] bg-white p-1 mx-auto mt-20 w-fit">
                    <div className="flex justify-between">
                        <span>Filter</span>
                        <button>
                            <span className="material-icons-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <PriceRange />
                </div>
            </div>
        </>
    )
}

export default Filter;