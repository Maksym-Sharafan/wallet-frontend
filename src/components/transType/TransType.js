import React from 'react';
import styles from './TransType.module.css'

const TransType = () => {
 const incomeClasses = [styles.income]
 const costClasses = [styles.cost]
 const handleChange = ()=> {
  incomeClasses.push("no_checked");
  costClasses.push("costActive");
 } 
  return (
          <div className={styles.switchWraper}>
          <span className={incomeClasses.map(item=>item)}>Доход</span>
          <label className={styles.switch}>
          <input type="checkbox" className={styles.sliderInput} onChange = {handleChange}/>
             <span className={styles.slider}></span>
           </label>
          <span className={costClasses.map(item =>item)}>Расход</span>
      </div>
  )
};

export default TransType;