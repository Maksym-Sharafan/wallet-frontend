import React from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../../src/redux/transactions';
import styles from './Balance.module.css';

const Balance = () => {
  const transactions = useSelector(transactionsSelectors.GetTransactionsList);
  const balance = transactions.length > 0 ? new Intl.NumberFormat('uk', {minimumFractionDigits: 2}).format(transactions[0].balance) : "0.00";
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>ВАШ БАЛАНС</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {balance}
      </p>
    </div>
  );
};

export default Balance;
