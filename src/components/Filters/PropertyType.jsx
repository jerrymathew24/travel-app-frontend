import { v4 as uuid } from "uuid";

const propertyType = [
    { id: uuid(), type: "House" },
    { id: uuid(), type: "Guest House" },
    { id: uuid(), type: "Flat" },
    { id: uuid(), type: "Hotel" }
]
const PropertyType = () => {
    return (
        <div className="space-y-5 mt-[2rem]">
            <h2 className="font-medium text-2xl text-gray-800">Property Type</h2>
            <div className="flex gap-4 flex-wrap">
                {
                    propertyType.map(({ id, type }) => (
                        <div
                            key={id}
                            className="w-[80px] h-[80px] flex items-center justify-center text-gray-700 text-base border border-gray-400 rounded cursor-pointer hover:bg-blue-100 hover:border-blue-500 transition"
                        >
                            {type}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PropertyType;