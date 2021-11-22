import React from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../../src/redux/transactions';
import styles from './Balance.module.css';

const Balance = () => {
  // const balance = useSelector(transactionsSelectors.getBalance);
  const transactions = useSelector(transactionsSelectors.GetTransactionsList);
  const balance = transactions.length > 0 ? transactions[0].balance : "0.00";
  // console.log(balance);
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
