import { shallowEqual, useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import styles from './hometab.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { transactionsOperations } from "../../redux/transactions";


const HomeTab = () => {
  const dispatch = useDispatch();
  const costs = useSelector(transactionsSelectors.getCosts);
  const balance = useSelector(transactionsSelectors.getBalance);
  console.log(costs);
  console.log(balance);

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

          {/* <tbody>
            {costs.length > 0 &&
              costs.map(({ id, date, type, category, description, amount }) => (
                <tr key={id} className={styles.row}>
                  <td className={styles.item}>{date}</td>
                  <td className={styles.item}>{type}</td>
                  <td className={styles.item}>{category}</td>
                  <td className={styles.item}>{description}</td>
                  <td className={type === '-' ? styles.red : styles.blue}>
                    {amount.toFixed(2)}
                  </td>
                  <td>
                    {type === '-'
                      ? (balance - amount).toFixed(2)
                      : (balance + amount).toFixed(2)}
                  </td>
                </tr>
              ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default HomeTab;
