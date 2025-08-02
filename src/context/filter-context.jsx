import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const initialValue = {
 isFilterModalOpen : false,
 priceRange:[300,20000],
 noOfBathrooms: "Any",
 noOfBeds: "Any",
 noOfBedrooms: "Any"
}

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {



    const [{isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms,noOfBeds}, filterDispatch] = useReducer(filterReducer, initialValue)

    return (
        <FilterContext.Provider value={{isFilterModalOpen, priceRange,noOfBathrooms,noOfBedrooms,noOfBeds, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter }; 