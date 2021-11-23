import React, { useState , useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import DatePicker from "react-datepicker";
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


import categoriesList from '../../redux/categories/categories'
import { transactionsOperations, transactionsSelectors } from "../../redux/transactions";

import styles from './FormAddTrans.module.css';
import "react-datepicker/dist/react-datepicker.css";

// import moment from 'moment'



const FormAddTrans = ({onClose, showModal}) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  // состояние чекбокса типа транзакции 
  const [isChecked, setIsChecked] = useState(false);
  // сщстояние для типа трансакции
  const [transType, setTransType] = useState('income');
  //выбор категории
  const [isSelected, setIsSelected] = useState();
  // переключает тип и раскрашивает название типа

  const error = useSelector(transactionsSelectors.getError, shallowEqual)

  const handleChange = () => {
    setIsChecked(!isChecked);
    isChecked ? setTransType('income') : setTransType('cost');
  };

  const handelSelect = (e) => {
    const categoryId = e.target.value;
    setIsSelected(categoryId);
  }

  useEffect(()=>{
    setIsSelected();
  },[isChecked]
  );
  
  const options = [...categoriesList];
  const formik = useFormik({
    initialValues: {
      type: "",
      category: isSelected,
      amount: '',
      date: date,
    },
    onSubmit: (values, {resetForm}) => {
      const correctValues = { ...values, type: transType, category: isSelected, date: date }
      dispatch(transactionsOperations.addTransaction(correctValues));
      resetForm()

      setTimeout(() => {
      if (!error) {
        console.log(error)
      onClose()
      
      }
      }, 2000);

      // window.location.reload();
    }
  });

  useEffect(() => {
    // console.log(typeof error)
   if (error) {
     const errorMessage = (error) ? "Balance cannot be negative" : 'Транзакция'

            toast.error(
            errorMessage,
            { position: toast.POSITION.TOP_RIGHT },
          );

   } 
   
  }, [error]);

  return (
    <>
    <button type="submit"  onClick={onClose} className={styles.onClose}></button>
    <form onSubmit={formik.handleSubmit} className={styles.formWrapper}>
      <div className={styles.header}>
        <h1 className={styles.hText}>Добавить транзакцию</h1>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.switchWrapper}>
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
      <div className={styles.inputWrapper}>
         {isChecked && <div className={styles.categoryWrapper}>
            <Select className={styles.category}
              value={isSelected}
              id="category"
              name="category"
              required={true}
              type="select"
             onChange={handelSelect}>
              {options.map(({ _id, name }) => {
              return (<MenuItem value={_id} key={_id} className={styles.option}>
                {name}
              </MenuItem>)})}
            </Select>
          <label className={styles.selectLabel} > Выберите категорию </label>
        </div>
        }
        <div className={styles.inputGroup}>
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
          <div className={styles.reactDatepickerWrapper}>
            <DatePicker
              className={styles.datepicker }
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
      <button type="submit"  className={styles.addBtn}>Добавить</button>
      <button onClick={onClose} className={styles.CancelBtn}  > Отмена </button>
    </form>
{/* <ToastContainer /> */}
</>
  );
};

export default FormAddTrans;
