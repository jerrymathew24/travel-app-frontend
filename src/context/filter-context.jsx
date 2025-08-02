import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const initialValue = {
 isFilterModalOpen : false,
 priceRange:[300,20000]
}

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {



    const [{isFilterModalOpen, priceRange}, filterDispatch] = useReducer(filterReducer, initialValue)

    return (
        <FilterContext.Provider value={{isFilterModalOpen, priceRange, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter }; 