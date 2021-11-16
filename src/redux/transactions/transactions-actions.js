import { createAction } from "@reduxjs/toolkit";

const addIncomeRequest = createAction("transactions/addIncomeRequest");
const addIncomeSuccess = createAction("transactions/addIncomeSuccess");
const addIncomeError = createAction("transactions/addIncomeError");

const addCostRequest = createAction("transactions/addCostRequest");
const addCostSuccess = createAction("transactions/addCostSuccess");
const addCostError = createAction("transactions/addCostError");

const transactionsActions = {
  addIncomeRequest,
  addIncomeSuccess,
  addIncomeError,
  addCostRequest,
  addCostSuccess,
  addCostError
}  
export default transactionsActions;