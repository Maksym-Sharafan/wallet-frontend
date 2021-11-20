import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as id } from 'uuid';
import Chart from '../Chart';
import Table from '../Table';
// import s from './DiagramTab.module.scss';

import styles from './DiagramTab.module.css';

import date from './monthAndYear';
import {
  statisticsActions,
  statisticsOperations,
  statisticsSelectors,
} from '../../../redux/statistics';

import {
  transactionsActions,
  transactionsOperations,
  transactionsSelectors
} from '../../../redux/transactions';


function DiagramTab() {
  const [month, setMonth] = useState(date.currentMonth);

  const handleChangeMonth = ({ target: { value } }) => {
    setMonth(value);
  };

  const [year, setYear] = useState(date.currentYear);

  const handleChangeYear = ({ target: { value } }) => {
    setYear(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statisticsOperations.fetchStatistics(month, year));

    return () => {
      dispatch(statisticsActions.resetStatistics());
    };
  }, [dispatch, month, year]);

  // const statisticsData = useSelector(statisticsSelectors.getItems);
  // const total = useSelector(statisticsSelectors.getBalance);
  // const income = useSelector(statisticsSelectors.getIncome);
  // const outlay = useSelector(statisticsSelectors.getOutlay);
  const statisticsData = useSelector(transactionsSelectors.getCosts);
  const total = useSelector(transactionsSelectors.getBalance);
  const income = useSelector(transactionsSelectors.getIncomes);
  // const outlay = useSelector(transactionsSelectors.getOutlay);

  const data = statisticsData.map(({ count }) => count);
  const backgroundColor = statisticsData.map(({ color }) => color);
  const label = statisticsData.map(({ name }) => name);

  const chartData = {
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
      },
    ],
    labels: label,
  };

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Statistic</h2>

        <div className={styles.wrapper}>
          <div className={styles.visualPart}>
            {statisticsData.length > 0 && (
              <h2 className={styles.chartTotal}>
                ₴ {total ? total.toFixed(2) : 0}
              </h2>
            )}
            <Chart data={chartData} />
          </div>

          <div className={styles.tablePart}>
            <div className={styles.filter}>
              <select
                value={month}
                id="month"
                className={styles.dropdown}
                onChange={handleChangeMonth}
              >
                {date.months.map(month => (
                  <option value={month} key={id()}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                value={year}
                id="year"
                className={styles.dropdown}
                onChange={handleChangeYear}
              >
                {date.years.map(year => (
                  <option value={year} key={id()}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {statisticsData.length ? (
              // <Table data={statisticsData} income={income} outlay={outlay} />
              <Table data={statisticsData} income={income} />
            ) : (
              <p className={styles.warning}>
                Please, add at least one transaction for this month
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default DiagramTab;