import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styles from './AddBtn.module.css'
import AddIcon from '@material-ui/icons/Add';
import Modal from '../ModalAddTrans'
import FormAddTrans from '../FormAddTrans/FormAddTrans'
import { isModalAddTransactionOpen } from '../../redux/modalAddTransaction/modal-actions'
import { useState } from 'react';
import { transactionsOperations } from "../../redux/transactions";
// import { authOperations } from "../../redux/auth";




export default function  AddBtn () {
  const dispatch = useDispatch();
  const [ShowModal, setShowModal] = useState(false)
  // const ShowModal= useSelector((state) => state.global)
  const toggleModal = () =>{
    setShowModal(!ShowModal)
    dispatch(isModalAddTransactionOpen())

  }

  //   useEffect(() => {
  //         if (ShowModal === false) {
  //           setTimeout(() => {
  //   dispatch(transactionsOperations.fetchTransactions());
  //   // dispatch(authOperations.fetchCurrentUser());
              
  //           }, 2000);}
  // }, [ShowModal]);

  return (
    <>
    <button className={styles.button} type={'button'} aria-label="Add"
       onClick={toggleModal}>
       <AddIcon />
    </button>
    { ShowModal && <Modal onClose = {toggleModal}>
      <FormAddTrans onClose = {toggleModal} showModal= {ShowModal} />
    </Modal>}
    </>
  );

};


