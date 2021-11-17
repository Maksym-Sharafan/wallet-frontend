import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import MyDatePicker from "./dtpicer";
import { useFormik } from 'formik';
import styles from './formAddTrans.module.css';
import TransType from '../transType';
// import MyDTPicker from './dtpicer';
// import {useState, useSelect} from 'React;'


const FormAddTrans = () => {
  const [categories, setCategories] = useState();
  console.log(categories);
  let selectValue = ' '
  const options = ['основные расходы', 'Продукты', 'Машина', 'Забота о себе', 'Забота о детях', 'Товары для дома', 'Образование', 'Досуг', 'Другие расходы']
  const formik = useFormik({    
    initialValues: {
      amount: " ",
      date: "",
      comment: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.formWraper}>
      <div className = {styles.header}>
      <h1 className={styles.hText}>Добавить транзакцию</h1>
      </div>
      <TransType />
      <div className={styles.inputGroup}>
      <div  className={styles.formField}>
      <div className={styles.category}>
      <select className={styles.select}
        id="category"
        name="category"
        required = {true}
        type="select"
        value = {selectValue}
        onChange={()=> formik.handleChange} >
         {options.map((item) => {
          return (<option value={item} key={item}>
            {item}
            </option>)
        })
        }
      </select>
      <label className={styles.formLabel} htmlFor="category">
        Категория</label>
      </div> 
      </div> 
      <div className={styles.formField}>
      <input className={styles.input}
        id="amount"
        name="amount"
        type="number"
        min="0"
        step="0.1"
        placeholder=" "
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
      <label className={styles.formLabel} htmlFor="amount">
        0.00</label>
      </div>
      {/* <div className={styles.formField}>
      <input className={styles.input}
        id="date"
        name="date"
        type="date"
        placeholder=" "
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label htmlFor="date" className={styles.formLabel}>{today}</label>
      </div> */}
      <MyDatePicker />
      <div className={styles.formField}>
      <input className={styles.comment}
        id="comment"
        name="comment"
        type="text"
        placeholder=" "
        onChange={formik.handleChange}
        value={formik.values.comment}
      />
      <label htmlFor="comment" className={styles.formLabel}>
        Комментарий</label>
      </div>
      </div>
      <button type="submit" className={styles.addBtn}>Добавить</button>
      <button type="submit" className={styles.CancelBtn}>
        Отмена</button>
    </form>
  );
};

export default FormAddTrans;