import React from 'react';

import { v4 as id } from 'uuid';

import styles from './Table.module.css';

const Table = ({ data, income, outlay }) => {
  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th className={styles.tableFirstCol}>Category</th>
              <th className={styles.tableSecondCol}>Sum</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {data.map(({ name, color, count }) => (
              <tr key={id()}>
                <td className={styles.tableData}>
                  <span
                    className={styles.mark}
                    style={{ backgroundColor: color }}
                  ></span>

                  {name}
                </td>
                <td className={styles.tableData}>{count.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>

          <tfoot className={styles.tableFoot}>
            <tr className={styles.footRaw}>
              <th className={styles.footTitle}>Outlay:</th>
              <td className={styles.expenses}>{outlay ? outlay.toFixed(1) : 0}</td>
            </tr>
            <tr className={styles.footRow}>
              <th className={styles.footTitle}>Income:</th>
              <td className={styles.incomes}>{income ? income.toFixed(1) : 0}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Table;