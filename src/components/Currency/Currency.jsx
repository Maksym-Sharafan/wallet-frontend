import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import styles from './styles';

const PRIVATBANK_API =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

const Currency = () => {
  const [isLoader, setIsLoader] = useState(true);
  const useStyles = makeStyles(styles(isLoader));
  const classes = useStyles();

  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    axios(PRIVATBANK_API)
      .then(({ data }) => {
        setCurrencyData(data.slice(0, 3));
        setIsLoader(false);
      })
      .catch(data => {
        setIsLoader(false);
        console.log(data);
      });
  }, []);

  return (
    <Box className={classes.currencyContainer}>
      {isLoader ? (
        <Loader
          className={classes.loader}
          type="Watch"
          color="#6E78E8"
          height={50}
          width={50}
        />
      ) : (
        <TableContainer className={classes.tableContainer}>
          <Table className={classes.table} aria-label="currency table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableTitle}>Валюта</TableCell>
                <TableCell className={classes.tableTitle} align="center">
                  Покупка
                </TableCell>
                <TableCell className={classes.tableTitle} align="right">
                  Продажа
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              style={{ paddungBottom: '20px' }}
              className={classes.tableBody}
            >
              {currencyData.map(row => (
                <TableRow key={row.ccy}>
                  <TableCell className={classes.bodyData}>{row.ccy}</TableCell>
                  <TableCell className={classes.bodyData} align="center">
                    {Number(row.buy) > 10
                      ? Number(row.buy).toFixed(2)
                      : '0' + Number(row.buy).toFixed(2)}
                  </TableCell>
                  <TableCell className={classes.bodyData} align="right">
                    {Number(row.sale) > 10
                      ? Number(row.sale).toFixed(2)
                      : '0' + Number(row.sale).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Currency;
