import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { useFormik } from 'formik';


import categoriesList from '../../redux/categories/categories'
import { transactionsOperations } from "../../redux/transactions";
import {isModalAddTransactionOpen} from '../../redux/modalAddTransaction/modal-actions'

import styles from './FormAddTrans.module.css';
import "react-datepicker/dist/react-datepicker.css";

// import moment from 'moment'



const FormAddTrans = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  // состояние для выбора типа транзакции 
  const [isChecked, setIsChecked] = useState(false);
  // сщстояние для типа трансакции
  const [transType, setTransType] = useState('income');
  //выбор категории
  const [isSelected, setIsSelected] = useState();
  // переключает тип и раскрашивает название типа
  const handleChange = () => {
    setIsChecked(!isChecked);
    isChecked ? setTransType('income') : setTransType('cost');
  };

  const handelSelect = (e) => {
    const categoryId = e.target.value;
    setIsSelected(categoryId)
  }
  
  const options = [...categoriesList];
  const formik = useFormik({
    initialValues: {
      type: "",
      category: isSelected,
      amount: '',
      date: date,
      // comment: ""
    },
    onSubmit: values => {
      // console.log(values);
      const correctValues = { ...values, type: transType, category: isSelected, date: date }
      // const correctValues = { ...values, type: transType, category: isSelected, date: moment(date).format() }
      console.log(correctValues);
      alert(JSON.stringify(correctValues, null, 2));
      dispatch(transactionsOperations.addTransaction(correctValues));
      // setIsChecked(false)
      // dispatch(isModalAddTransactionOpen())

      window.location.reload();
    }
  });
  // console.log(formik.values)
  return (
    <form onSubmit={formik.handleSubmit} className={styles.formWraper}>
      <div className={styles.header}>
        <h1 className={styles.hText}>Добавить транзакцию</h1>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.switchWraper}>
          <span className={styles.income}
            style={{ color: isChecked ? "#E0E0E0" : "#24CCA7" }}>
            Доход
          </span>
          <label className={styles.switch}>
            <input type="checkbox" className={styles.sliderInput}
              onChange={handleChange} />
            <span className={styles.slider}></span>
          </label>
          <span className={styles.cost}
            style={{ color: isChecked ? "#FF6596" : "#E0E0E0" }}>Расход</span>
        </div>
      </div>
      <div className={styles.inputGroup}>
        {/* { isChecked &&  < CustomizedSelects  options={options} handleChange = {handelSelect} />}     */}
        {isChecked && <div className={styles.category}>
          <select className={styles.select}
            id="category"
            name="category"
            required={true}
            type="select"
            onChange={handelSelect} >
            <option value="" selected disabled hidden >
              Выберите категорию</option>
            {options.map(({ _id, name }) => {
              return (<option value={_id} key={_id} className={styles.option}>
                {name}
              </option>)
            })}
          </select>
        </div>
        }
        {/* <div className={styles.inputGroup}> */}
          <div className={styles.formField}>
            <input className={styles.input}
              id="amount"
              name="amount"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              required
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
          </div>
          <div className={styles.formField}>
            <DatePicker
              className="react-datepicker"
              name="date"
              type="date"
              dateFormat="Pp"
              selected={date}
              dateFormat="yyyy-MM-dd"
              onChange={(date) => { setDate(date) }}
            />

          </div>
        {/* </div> */}
        <div className={styles.formField}>
          <textarea className={styles.comment}
            id="comment"
            name="comment"
            type="text"
            placeholder="Комментарий"
            onChange={formik.handleChange}
            value={formik.values.comment}
          />
        </div>
      </div>
      <button type="submit" className={styles.addBtn}>Добавить</button>
      <button onClick={() => dispatch(isModalAddTransactionOpen())} className={styles.CancelBtn}  > Отмена </button>
    </form>


  );
};

export default FormAddTrans;
