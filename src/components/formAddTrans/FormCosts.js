import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import MyDatePicker from "../MyDatePicker";
import CategoryInput from "../CategoryInput";
import addTransaction from "../../redux/transactions/transactions-operations";
// import styles from "./TransactionsExpForm.module.scss";

const FormCosts = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const reset = () => {
    setStartDate(new Date());
    setCategory("");
    setDescription("");
    setAmount("");
  };

  const history = useHistory();
  const goToTransactions = () => {
    history.push("/transactions");
  };

  const addExpense = (e) => {
    e.preventDefault();
    const date = [
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      startDate.getDate(),
    ].join("-");
    const body = {
      type: "costs",
      date,
      amount: +amount,
      category,
      description,
    };
    dispatch(addTransaction(body));
    reset();
    goToTransactions();
  };

  return (
    <form className={styles.form} onSubmit={addExpense}>
      <div className={styles.form__input_wrapper}>
        <MyDatePicker
          selectedDate={startDate}
          handleChange={(date) => setStartDate(date)}
        />
        <div className={styles.form_input}>
          <input
            className={styles.form_input_description}
            type="text"
            placeholder="Комментарий"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <CategoryInput
            type="costs"
            categoryPick={category}
            setCategory={setCategory}
          />

          <input
            className={styles.form_input_amount}
            type="text"
            placeholder="0,00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.form__btn}>
        <button
          type={"submit"}
          buttonText={"Добавить"}
          buttonHandler={addExpense}
        />
        <button type={"button"} buttonText={"Отмена"} buttonHandler={reset} />
      </div>
    </form>
  );
};

export default FormCosts;