import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsSelectors } from '../../redux/transactions';
import { transactionsOperations } from '../../redux/transactions';
import categoriesList from '../../redux/categories/categories';
import moment from 'moment';
import Media from 'react-media';
import styles from './hometab.module.css';

const HomeTab = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(transactionsSelectors.GetTransactionsList);

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);

  return (
    <div>
      <Media
        queries={{
          small: '(max-width: 767px)',
          large: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <table className={styles.table}>
                <tbody>
                  {transactions.length > 0 &&
                    transactions.map(
                      ({
                        _id: id,
                        type,
                        category,
                        amount,
                        date,
                        comment,
                        balance,
                      }) => (
                        <>
                          <tr
                            key={id}
                            className={
                              type === 'cost'
                                ? `${styles.cost} ${styles.row}`
                                : `${styles.income} ${styles.row}`
                            }
                          >
                            <th className={styles.tableHead}>Дата</th>
                            <td className={styles.item}>
                              {moment(date).format('DD.MM.YY')}
                            </td>

                            <th className={styles.tableHead}>Тип</th>
                            <td className={styles.item}>
                              {type === 'cost' ? '-' : '+'}
                            </td>

                            <th className={styles.tableHead}>Категория</th>
                            <td className={styles.item}>
                              {category
                                ? categoriesList.find(
                                    ({ _id: id }) => id === category,
                                  ).name
                                : 'Регулярный доход'}
                            </td>

                            <th className={styles.tableHead}>Комментарий</th>
                            <td className={styles.item}>{comment}</td>

                            <th className={styles.tableHead}>Сумма</th>
                            <td
                              className={
                                type === 'cost'
                                  ? `${styles.cost} ${styles.item}`
                                  : `${styles.income} ${styles.item}`
                              }
                            >
                              {amount.toFixed(2)}
                            </td>

                            <th className={styles.tableHead}>Баланс</th>
                            <td className={styles.item}>
                              {balance.toFixed(2)}
                            </td>
                          </tr>
                        </>
                      ),
                    )}
                </tbody>
              </table>
            )}

            {matches.large && (
              <div className={styles.table}>
                <table className={styles.table}>
                  <thead>
                    <tr className={styles.headRow}>
                      <td className={styles.headData}>Дата</td>
                      <td className={styles.headData}>Тип</td>
                      <td className={styles.headData}>Категория</td>
                      <td className={styles.headData}>Комментарий</td>
                      <td className={styles.headData}>Сумма</td>
                      <td className={styles.headData}>Баланс</td>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.length > 0 &&
                      transactions.map(
                        ({
                          _id: id,
                          type,
                          category,
                          amount,
                          date,
                          comment,
                          balance,
                        }) => (
                          <tr key={id} className={styles.row}>
                            <td className={styles.item}>
                              {moment(date).format('DD.MM.YY')}
                            </td>
                            <td className={styles.item}>
                              {type === 'cost' ? '-' : '+'}
                            </td>
                            <td className={styles.item}>
                              {category
                                ? categoriesList.find(
                                    ({ _id: id }) => id === category,
                                  ).name
                                : 'Регулярный доход'}
                            </td>
                            <td className={styles.item}>{comment}</td>
                            <td
                              className={
                                type === 'cost'
                                  ? `${styles.cost} ${styles.item}`
                                  : `${styles.income} ${styles.item}`
                              }
                            >
                              { new Intl.NumberFormat('ru-RU', {minimumFractionDigits:2}).format(amount)}
                              {/* {amount.toFixed(2)} */}
                            </td>
                            <td className={styles.item}>
                              {/* {balance.toFixed(2)} */}
                              { new Intl.NumberFormat('ru-RU', {minimumFractionDigits:2}).format(balance)}
                            </td>
                          </tr>
                        ),
                      )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </Media>

      {/* <div className={styles.table}> */}

      {/* </div> */}
    </div>

    // <div>
    //
    // </div>
  );
};

export default HomeTab;
