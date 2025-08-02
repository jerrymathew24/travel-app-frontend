import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory } from "../context/category-context";
import { useFilter } from "../context/filter-context";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [numberOfCategoriesToShow, setNumberOfCategoriesToShow] = useState(0);
    const { hotelCategory, setHotelCategory } = useCategory();
    const { filterDispatch } = useFilter()

    const handleShowMoreRightClick = () => {
        setNumberOfCategoriesToShow(prev => prev + 11);
    }
    const handleShowMoreLeftClick = () => {
        setNumberOfCategoriesToShow(prev => prev - 11);
    }
    const handleFilterClick = () => {
        filterDispatch({
            type: "SHOW_FILTER_MODAL"
        })
    }

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("https://travel-app-backend-lsj1.onrender.com/api/categories");
                const categoriesToShow = data.slice(
                    numberOfCategoriesToShow + 10 > data.length ?
                        data.length - 10 : numberOfCategoriesToShow,
                    numberOfCategoriesToShow > data.length ?
                        data.length : numberOfCategoriesToShow + 10);
                setCategories(categoriesToShow);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [numberOfCategoriesToShow]);

    const onCategoryClick = (category) => {
        setHotelCategory(category)
    }


    return (
        <section className="fixed top-16 z-40 w-full bg-white p-4 flex gap-5 text-xs font-light text-gray-700  whitespace-nowrap">
            {
                numberOfCategoriesToShow >= 11 &&
                <button className="  bg-gray-100 hover:bg-gray-200 transition shadow text-gray-700" onClick={handleShowMoreLeftClick}>
                    <span className="material-icons-outlined">
                        chevron_left
                    </span>
                </button>
            }

            {categories.map(({ category, _id }) => (
                <span
                    key={_id}
                    onClick={() => onCategoryClick(category)}
                    className={`cursor-pointer hover:text-blue-600 transition ${category === hotelCategory ? "border-b-2 border-b-blue-600" : ''}`}
                >
                    {category}
                </span>
            ))}

            {
                numberOfCategoriesToShow - 11 < categories.length &&
                <button className=" bg-gray-100 hover:bg-gray-200 transition shadow text-gray-700" onClick={handleShowMoreRightClick}>
                    <span className="material-icons-outlined">
                        chevron_right
                    </span>
                </button>
            }
            <button className="flex items-center gap-1 cursor-pointer fixed top-[4.5rem] right-[1.5rem]  border rounded border-blue-600 hover:bg-blue-200 p-1" onClick={handleFilterClick}>
                <span className="material-icons-outlined">filter_alt</span>
                <span>Filter</span>
            </button>
        </section>
    );
};

export default Categories;
