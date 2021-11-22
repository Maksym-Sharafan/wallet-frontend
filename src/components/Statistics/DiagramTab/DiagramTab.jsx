import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as id } from 'uuid';
import Chart from '../Chart';
import Table from '../Table';
import categoriesList from '../../../redux/categories/categories'


import styles from './DiagramTab.module.css';

import date from './monthAndYear';
import {
  statisticsOperations,
  statisticsSelectors,
} from '../../../redux/statistics';



function DiagramTab() {
  const currentMonthNumber = date.months.find(month => month.title === date.currentMonth).number
  const [month, setMonth] = useState(currentMonthNumber);

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

  }, [dispatch, month, year]);

  const statisticsData = useSelector(statisticsSelectors.getItems);

  const income = statisticsData.filter(item=>item.type==="income").reduce((prev, cur)=>{return prev+cur.amount},0)
  const outlay = statisticsData.filter(item => item.type === "cost").reduce((prev, cur) => { return prev + cur.amount }, 0)
  const costs = statisticsData.filter(item => item.type === "cost")

  const pivottable = costs.reduce((acc, cur, idx) => {
    const cost = acc.find(itm => itm.id === cur.category)
    cost ?
      acc[acc.indexOf(cost)].count+=cur.amount:
      acc.push({ id: cur.category, name: categoriesList.find(cat => cat._id === cur.category).name, count: cur.amount, color: categoriesList.find(cat => cat._id === cur.category).color })
    return acc
  }, [])

  const data = pivottable.map(({ count }) => count);
  const backgroundColor = pivottable.map(({ color }) => color);
  const label = pivottable.map(({ name }) => name);

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
        <h2 className={styles.sectionTitle}>Статистика</h2>

        <div className={styles.wrapper}>
          <div className={styles.visualPart}>
            {statisticsData.length > 0 && (
              <h2 className={styles.chartTotal}>
                ₴ {outlay ? outlay.toFixed(2) : 0}
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
                  <option value={month.number} key={id()}>
                    {month.title}
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
              <Table data={pivottable} income={income} outlay={outlay} />
            ) : (
              <p className={styles.warning}>
                За выбранный месяц транзакций нет
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default DiagramTab;