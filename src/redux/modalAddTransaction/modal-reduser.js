import { createReducer } from '@reduxjs/toolkit';
import  {isModalAddTransactionOpen}  from './modal-actions';


  const ModalAddTransactionOpen = createReducer(false, {
    [isModalAddTransactionOpen] : (state, payload) => payload,
  })

export default ModalAddTransactionOpen;
