import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './addBtn.module.css'
import AddIcon from '@material-ui/icons/Add';
import Modal from '../modalAddTrans'
import FormAddTrans from '../formAddTrans/formAddTrans'
import {isModalAddTransactionOpen} from '../../redux/modalAddTransaction/modal-actions'

export default function  AddBtn () {
  const dispatch = useDispatch();
  const ShowModal= useSelector((state) => state.global)
  const toggleModal = () =>{
    dispatch(isModalAddTransactionOpen())
  }
  return (
    <>
    <button className={styles.button} type={'button'} aria-label="Add"
      onClick={()=>dispatch(isModalAddTransactionOpen())}>
       <AddIcon />
    </button>
    { ShowModal && <Modal onClose = {toggleModal}>
      <FormAddTrans />
    </Modal>}
    </>
  );

};

