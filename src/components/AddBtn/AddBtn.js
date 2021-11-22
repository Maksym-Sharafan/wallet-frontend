import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styles from './AddBtn.module.css'
import AddIcon from '@material-ui/icons/Add';
import Modal from '../ModalAddTrans'
import FormAddTrans from '../FormAddTrans/FormAddTrans'
import { isModalAddTransactionOpen } from '../../redux/modalAddTransaction/modal-actions'
import { useState } from 'react';
import { transactionsOperations } from "../../redux/transactions";




export default function  AddBtn () {
  const dispatch = useDispatch();
  const [ShowModal, setShowModal] = useState(false)
  const toggleModal = () =>{
    setShowModal(!ShowModal)

    //удалить, если не испольуется
    dispatch(isModalAddTransactionOpen())

  }

    useEffect(() => {
          if (ShowModal === false) {
            setTimeout(() => {
    dispatch(transactionsOperations.fetchTransactions());
            }, 2000);}
  }, [dispatch, ShowModal]);

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


