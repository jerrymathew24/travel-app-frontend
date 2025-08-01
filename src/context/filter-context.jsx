import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const initialValue = {
    isFilterModalOpen: false,
    priceRange: [300, 20000],
    noOfBathrooms: "Any",
    noOfBeds: "Any",
    noOfBedrooms: "Any",
    propertyType: "Any",
    traveloRating: 1,
    isCancelable: true
}

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {



    const [{ isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, traveloRating, isCancelable }, filterDispatch] = useReducer(filterReducer, initialValue)

    return (
        <FilterContext.Provider value={{ isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, traveloRating, isCancelable, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter }; 