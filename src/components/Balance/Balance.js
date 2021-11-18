import React from 'react';
import { useSelector } from 'react-redux';
import { statisticsSelectors } from '../../../src/redux/statistics';
import styles from './Balance.module.scss';

const Balance = () => {
  
    const balance = useSelector(statisticsSelectors.getBalance);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Current Balance</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {balance}
      </p>
    </div>
  );
};

export default Balance;