import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useDate } from "../context/date-context";

const DateSelector = ({ placeholder, checkInType }) => {

    const { checkInDate, checkOutDate, dateDispatch } = useDate();

    const handleDateChange = (date) => {
        dateDispatch({
            type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT",
            payload: date
        })
    }

    const handleDateFocus = () => {
        dateDispatch({
            type: "DATE_FOCUS"
        })
    }

    return (
        <DatePicker
            selected={checkInType === "in" ? checkInDate : checkOutDate}
            onChange={(date) => handleDateChange(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Add Date"
            onFocus={handleDateFocus}
            closeOnScroll={true}
            className="focus:outline-none border-none px-3 p-[.0rem]  text-center w-48 text-blue-600 text-sm"
        />
    )
}
export default DateSelector