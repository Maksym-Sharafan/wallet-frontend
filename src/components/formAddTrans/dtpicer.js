import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

import  './dtpicer.css';

const MyDTPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
 console.log(startDate);
 const handleDate = date => {
  setStartDate(date);
  const formatedDate = moment(date).format('yyyy-MM-DD');

    // setTransactionItem(state => ({
    //   ...state,
    //   date: formatedDate,
    // }));
 }
  return (
    <DatePicker id="dtpicer"
            className="react-datepicker"
            selected={startDate}
            onChange={handleDate}
            dateFormat="dd.MM.yyyy"
            />
  );
};


export default MyDTPicker ;