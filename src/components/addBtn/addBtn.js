import React from 'react';
import {useDispatch} from 'react-redux';
import styles from './addBtn.module.css'
import AddIcon from '@material-ui/icons/Add';
import {isModalAddTransactionOpen} from '../../redux/modalAddTransaction/modal-actions'

const AddBtn = () => {
  const dispatch = useDispatch();
  return (
    <button className={styles.button} type={'button'} aria-label="Add"
      onClick={()=>dispatch(isModalAddTransactionOpen(true))}>
       <AddIcon />
    </button>
  );

};

export default AddBtn;