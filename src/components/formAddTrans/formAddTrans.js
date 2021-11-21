import React, { useState } from 'react';
import { useDispatch , useSelector} from "react-redux";
import MyDatePicker from "./dtpicer";
import { useFormik } from 'formik';
import styles from './formAddTrans.module.css';
import {isModalAddTransactionOpen} from '../../redux/modalAddTransaction/modal-actions'
import addTransaction from '../../redux/transactions/transactions-operations'
import categoriesList from '../../redux/categories/categories'
import CustomizedSelects from './selectMUI'

const validate = values => {
   const errors = {};

  //  if (!values.category){
  //    errors.amount= 'Добавьте категорию';
  //  } else if(values.category.length <3 ) {
  //    errors.category = 'Выберите категорию';
  //  }
 
   if (!values.amount) {
     errors.amount = 'Введите сумму транзакции';
   } else if (values.amount.length < 1) {
     errors.amount = 'Введите сумму транзакции';
   }
 
  //  if (!values.date) {
  //    errors.date = 'Required';
  //  } else if (values.date.length < 1) {
  //    errors.date = 'Укажите дату трансакции';
  //  }
 
   return errors;
 };


const FormAddTrans = () => {
  const dispatch = useDispatch();
  //данные из глобального Store о состоянии модалки
  const ShowModal= useSelector((state) => state.global)
  // состояние для выбора типа транзакции 
const [isChecked, setIsChecked] = useState(false);
// сщстояние для типа трансакции
const [transType, setTransType] = useState('income')
//выбор категории
const [isSelected, setIsSelected] = useState(' ')
// переключает тип и раскрашивает название типа
 const handleChange = ()=> {
  setIsChecked(!isChecked);
  setTransType('cost');
 } 

 const handelSelect = (e) =>{
  const categoryId = e.target.value;  
  setIsSelected(categoryId)
  console.log(isSelected)
 }

 const handelCancel = (e)=> {
  dispatch(isModalAddTransactionOpen());
 }
  const options = [ ...categoriesList];

  const formik = useFormik({    
    initialValues: {
      type: "",
      category: isSelected,
      amount: "",
      date: "",
      comment: "",
    },
    validate, 
    onSubmit: values => {
      alert(JSON.stringify({
        ...values, type: transType, category: isSelected 
      }, null, 2));
      dispatch(isModalAddTransactionOpen());
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.formWraper} autocompleted="false">
      <div className = {styles.header}>
      <h1 className={styles.hText}> Добавить транзакцию</h1>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.switchWraper}>
          <span className={styles.income} 
          style={{color:isChecked ? "#E0E0E0":"#24CCA7"}}>
            Доход
          </span>
          <label className={styles.switch}>
           <input type="checkbox" className={styles.sliderInput} 
            onChange = {handleChange}/>
            <span className={styles.slider}></span>
          </label>
          <span className={styles.cost} 
          style={{color:isChecked ? "#FF6596": "#E0E0E0"}}>Расход</span>
        </div>
      </div>  
      <div className={styles.inputGroup}>   
      {/* { isChecked &&  < CustomizedSelects  options={options} handleChange = {handelSelect} />}     */}
        { isChecked &&  <div className={styles.category}>
          <select className={styles.select}
        id="category"
        name="category"
        required = {true}
        type="select"
        onChange={ handelSelect} 
         >
          <option value="" selected disabled hidden={true} >
            Выберите категорию</option>
         {options.map(({_id, name}) => {
          return (<option value={_id} key={_id} className={styles.option}>
            {name}
            </option>)
        })}
          
          </select> 
          </div> 
        }
      <div className={styles.inputGroup}>
      <input className={styles.input}
        required = {true}
        id="amount"
        name="amount"
        type="number"
        min="0"
        step="0.1"
        placeholder="0.00"
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
      { formik.errors.amount ? <div className={styles.error}>{ formik.errors.amount }</div> : null }
      {/* <MyDatePicker /> 
      валидация для даты
      { formik.errors.date? <div>{formik.errors.date}</div> : null }
      */}
      </div>
      <input className={styles.comment}
        id="comment"
        name="comment"
        type="text"
        placeholder="Комментарий"
        onChange={formik.handleChange}
        value={formik.values.comment}
      />
      </div>
      <button type="submit" className={styles.addBtn }>Добавить</button>
      <button type="submit" className={styles.CancelBtn} onClick={handelCancel} >
        Отмена
        </button>
    </form>
  );
};

export default FormAddTrans;