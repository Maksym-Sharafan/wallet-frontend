import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import * as Yup from 'yup';
import { useFormik } from 'formik';


import { transactionsOperations } from "../../redux/transactions";
import {isModalAddTransactionOpen} from '../../redux/modalAddTransaction/modal-actions'
import categoriesList from '../../redux/categories/categories'

import styles from './FormAddTrans.module.css';
import "react-datepicker/dist/react-datepicker.css";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import moment from 'moment'


const FormAddTrans = () => {
  const dispatch = useDispatch();
   const [date, setDate] = useState(new Date());

  const [modalOpen, setModalOpen] = useState(true);
  // состояние для выбора типа транзакции 
const [isChecked, setIsChecked] = useState(false);
// состояние для типа трансакции
const [transType, setTransType] = useState('income')
//выбор категории
const [isSelected, setIsSelected] = useState('')
//сумма транзакции
const [transAmount, setTransAmount] = useState('')

  const toggleModal = () =>{
    dispatch(isModalAddTransactionOpen())
  }
// переключает тип и раскрашивает название типа
const handleChange = ()=> {
  setIsChecked(!isChecked);
  isChecked ? setTransType('income') : setTransType('cost');
 } 

const handelSelect = (e) =>{
  const categoryId = e.target.value;  
  setIsSelected(categoryId)
  console.log(categoryId)
}

  const options = [ ...categoriesList];

  const formik = useFormik({    
    initialValues: {
      type: "",
      category: isSelected,
      amount: transAmount,
      date: date,
    },
     validationSchema: Yup.object({
       amount: Yup.string()
         .max(10, 'Must be 10 characters or less')
         .required('Required'),
     }), 
    onSubmit: values => {
      const correctValues = { ...values, type: transType, category: isSelected, date: date };
      console.log(correctValues);
      alert(JSON.stringify({correctValues}, null, 2));
      dispatch(transactionsOperations.addTransaction(correctValues));
      setModalOpen(false)
      dispatch(isModalAddTransactionOpen())
      window.location.reload();

    },
  });
  return (
    <form onSubmit= {formik.handleSubmit} className={styles.formWrapper}>
      <div className = {styles.header}>
      <h1 className={styles.hText}>Добавить транзакцию</h1>
      </div>
      {/* <div className={styles.inputGroup}> */}
        <div className={styles.switchWrapper}>
          <span className={styles.income} 
          style={{color:isChecked ? "#E0E0E0":"#24CCA7"}}>
            Доход
          </span>
          <label className={styles.switch} >
           <input type="checkbox" className={styles.sliderInput} 
            onChange = {handleChange}/>
             <span className={styles.slider}></span>
          </label>
          <span className={styles.cost} 
          style={{color:isChecked ? "#FF6596": "#E0E0E0"}}>Расход</span>
        </div>
      {/* </div> */}
      <div className={styles.inputGroup}>   
        {isChecked && <div className={styles.formField} >
    <Select className={styles.select}
    id="category"
    name="category"
    value={isSelected}
    required = {true}
    onChange={handelSelect}
  >
   {options.map(({_id, name})=>{ 
     return(<MenuItem value={_id} key={_id}>{name}</MenuItem> )
    })}
  </Select>
    { (!isSelected)&&<label className={styles.selectLabel}>Выберите категорию</label>}
    </div> }
      <div className={styles.requiredGroup}>
      <input className={styles.input}
        id="amount"
        name="amount"
        type="number"
        min="1"
        step="0.1"
        placeholder="0.00"
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
      { formik.touched.amount && formik.errors.amount ? <div className={styles.error}>{ formik.errors.amount }</div> : null }
      {/* <MyDatePicker /> */}
                <div className={styles.picerWrapper}>
            <DatePicker
              // className="react-datepicker"
              className={styles.datepicker}
              style={{height: "34px", width: "190px",}}
              name="date"
              type="date"
              dateFormat="Pp"
              selected={date}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              dateFormat="yyyy-MM-dd"
              onChange={(date) => { setDate(date) }}
            />
          </div>
      </div>
      <textarea className={styles.comment}
        id="comment"
        name="comment"
        type="text"
        placeholder="Комментарий"
        onChange={formik.handleChange}
        value={formik.values.comment}
      />
      </div>
      <button type="submit" className={styles.addBtn }>Добавить</button>
      <button onClick={() => dispatch(isModalAddTransactionOpen())} className={styles.CancelBtn}  > Отмена </button>
    </form>
  );
};

export default FormAddTrans;