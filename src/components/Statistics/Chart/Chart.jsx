import React from 'react';
import Media from 'react-media';

import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';

const options = {
  cutout: '70%',
};

const Chart = ({ data }) => {
  return (
    Boolean(data.datasets[0].backgroundColor.length) &&
    Boolean(data.datasets[0].data.length) && (
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <Doughnut
                data={data}
                options={options}
                height={280}
                width={280}
                className={styles.chart}
              />
            )}
            {matches.medium && (
              <Doughnut
                data={data}
                options={options}
                height={320}
                width={320}
                className={styles.chart}
              />
            )}
          </>
        )}
      </Media>
    )
  );
};

export default Chart;