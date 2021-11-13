import React from 'react';
import styles from './TransType.module.css'

const TransType = () => {

  return (
          <div>
          <span className={styles.income}>Доход</span>
          <label className={styles.switch}>
          <input type="checkbox" className={styles.sliderInput}/>
             <span className={styles.slider}></span>
           </label>
          <span className={styles.waste}>Расход</span>
      </div>
  )
};

export default TransType;