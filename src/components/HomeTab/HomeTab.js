import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import styles from './hometab.module.css';

const HomeTab = () => {
  const costs = useSelector(transactionsSelectors.getCosts);
  const balance = useSelector(transactionsSelectors.getBalance);

  return (
    <>
      <table>
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
                <td className={styles.center}>
                  {type === '-'
                    ? (balance - amount).toFixed(2)
                    : (balance + amount).toFixed(2)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default HomeTab;
