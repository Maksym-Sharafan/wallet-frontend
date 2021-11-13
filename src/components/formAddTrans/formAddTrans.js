import React from 'react';
import { useFormik } from 'formik';
import styles from './formAddTrans.module.css';
import TransType from '../transType';
const FormAddTrans = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const today = new Date().toLocaleDateString();
  const formik = useFormik({    
    initialValues: {
      amount: 0.00,
      date: today,
      comment: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TransType />
      <label htmlFor="amount"/>
      <input
        id="amount"
        name="amount"
        type="text"
        placeholder='0.00'
        onChange={formik.handleChange}
        value={formik.values.amount}
      />

      <label htmlFor="date"></label>
      <input
        id="date"
        name="date"
        type="date"
        placeholder={today}
        onChange={formik.handleChange}
        value={formik.values.date}
      />

      <label htmlFor="comment"></label>
      <input
        id="comment"
        name="comment"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.comment}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormAddTrans;