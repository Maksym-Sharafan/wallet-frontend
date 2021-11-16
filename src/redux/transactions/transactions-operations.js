import axios from "axios";
import transactionsActions from "./transactionsActions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const addTransaction =
  ({ type, date, amount, category, description }) =>
  async (dispatch) => {
    const transaction = {
      date,
      amount,
      category,
      description,
    };

    
    const actionRequestType = `add${type}Request`;
    const actionSuccessType = `add${type}Success`;
    const actionErrorType = `add${type}Error`;

    dispatch(transactionsActions[actionRequestType]());

    try {
      const response = await axios.post(`./transactions/${type}`, transaction);

      dispatch(transactionsActions[actionSuccessType](response.data.body));
    } catch (error) {
      console.log(error);
      dispatch(transactionsActions[actionErrorType](error.message));
    }
  };

// Операция ожидает тип транзакции "income или cost".
// type, date, amount, category и description нужно передать в виде обьекта и он передается на бэк,
//  если операция успешна то с бека вернётся таже транзакция, но с _id, балансом, датой создание и датой update .
// await dispatch(transactionsOps.addTransaction({type: "cost", date: "2021-11-10", amount: 1000, category: "сбережение", description: "депозит"});
// await dispatch(transactionsOps.addTransaction({type: "income", date: "2021-11-15", amount: 22000, category: "", description: "ЗП"});