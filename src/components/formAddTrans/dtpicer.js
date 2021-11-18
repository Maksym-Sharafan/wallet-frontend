import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';

import  './dtpicer.css';

const MyDatePicker = ({ selectedDate, handleChange, today }) => {
  return (
    <DatePicker id="dtpicer"
            className="react-datepicker"
            selected={selectedDate}
            onChange={handleChange}
            dateFormat="dd.MM.yyyy"
            onClick={handleChange}
            plaseholder={today}
            >
      <label className="datepicker__Icon" htmlFor="datepicker" />
      </DatePicker>
  );
};
// const MyDatePicker = ({ selectedDate, handleChange }) => (
//   <div className="datepicker__container">
//     <label className="datepicker__Icon" htmlFor="datepicker" />
//     <DatePicker
//       className="datepicker"
//       id="datepicker"
//       selected={selectedDate}
//       onChange={handleChange}
//       dateFormat="dd.MM.yyyy"
//       name="date"
//       fixedHeight
//       withPortal
//     />
//   </div>
// );

export default MyDatePicker;