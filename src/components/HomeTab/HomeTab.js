import { shallowEqual, useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import styles from './hometab.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from "../../redux/transactions";
import { Table } from '@material-ui/core';
import moment from 'moment'
import categoriesList from '../../redux/categories/categories'




const HomeTab = () => {
  const dispatch = useDispatch();
 
  const transactions = useSelector(transactionsSelectors.GetTransactionsList);


  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);
  
  return (
    <div>
      <div className={styles.table}>
      
        <table className={styles.table}>
          <thead>
            <tr className={styles.headRow}>
              <td>Дата</td>
              <td>Тип</td>
              <td>Категория</td>
              <td>Комментарий</td>
              <td>Сумма</td>
              <td>Баланс</td>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 &&
              transactions.map(({ _id:id, type, category, amount, date, comment, balance }) => (
                <tr key={id} className={styles.row}>
                  <td className={styles.item}>{moment(date).format('DD.MM.YY')}</td>
                  <td className={styles.item}>{type==="cost"?"-":"+"}</td>
                  <td className={styles.item}>{category?categoriesList.find(({ _id:id}) =>id=== category).name:"Регулярный доход"}</td>
                  <td className={styles.item}>{comment}</td>
                  <td className={type === 'cost' ? styles.red : styles.blue}>
                    {/* { new Intl.NumberFormat('ru-RU', {minimumFractionalDigits:2}).format(amount)} */}
                    { amount.toFixed(2)}
                  </td>
                  <td className={styles.item}>{balance.toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeTab;
