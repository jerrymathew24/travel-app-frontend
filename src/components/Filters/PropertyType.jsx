import { v4 as uuid } from "uuid";
import { useFilter } from "../../context/filter-context";

const propertyTypes = [
    { id: uuid(), type: "House" },
    { id: uuid(), type: "Guest House" },
    { id: uuid(), type: "Flat" },
    { id: uuid(), type: "Hotel" }
]
const PropertyTypes = () => {

    const handlePropertyClick = (property) => {
        filterDispatch({
            type: "PROPERTY_TYPE",
            payload: property
        })
    }

    const { propertyType, filterDispatch } = useFilter()
    
    return (
        <div className="space-y-5 mt-[2rem]">
            <h2 className="font-medium text-2xl text-gray-800">Property Type</h2>
            <div className="flex gap-4 flex-wrap">
                {
                    propertyTypes.map(({ id, type }) => (
                        <div
                            key={id}
                            className={`w-[80px] h-[80px] flex items-center justify-center text-gray-700 text-base border border-gray-400 rounded cursor-pointer hover:bg-blue-100 hover:border-blue-500 transition  ${propertyType === type
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "border-gray-400 hover:bg-blue-100 hover:border-blue-500"
                                }`}
                            onClick={() => handlePropertyClick(type)}
                        >
                            {type}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PropertyTypes;