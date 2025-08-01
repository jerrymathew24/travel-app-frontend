import { useFilter } from "../context/filter-context";

const ratings = ["1", "2", "3", "4", "5"]

const Ratings = () => {

    const { filterDispatch, traveloRating } = useFilter()

    const handleRatingsClick = (rating) => {
        filterDispatch({
            type: "RATING",
            payload: rating
        })
    }
    return (
        <div className="space-y-6 mt-[2rem]">
            <h2 className="font-medium text-2xl text-gray-800">Ratings</h2>
            <div className="flex justify-between" >
                {
                    ratings.map(rating =>
                        <span
                            key={rating}
                            onClick={() => handleRatingsClick(rating)}
                            className={`items-center cursor-pointer border border-gray-400 rounded-md p-[.5rem] hover:bg-blue-100 hover:border-blue-500  ${traveloRating === Number(rating) ? "bg-blue-500 text-white" : ""}`}
                        >
                            {rating} &Up
                        </span>
                    )
                }
            </div>
        </div>
    )
}
export default Ratings;