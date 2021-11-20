import styles from './Header.module.css';
import Icons from '../Icons';
import { authOperations, authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '25px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 5),
  },
}));

export default function Header() {
  const classes = useStyles();
  const [open, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <header className={styles.navigation_container}>
      <div className={styles.navigation_row}>
        <div className={styles.navigation_header_wallet}>
          <Icons name="wallet" className={styles.navigation_icon_wallet} />
          <p>Wallet</p>
        </div>
        <div className={styles.navigation_header}>
          <p className={styles.navigation_header_title}>{name}</p>

          <p className={styles.navigation_header_title}>|</p>
          <button
            type="button"
            className={styles.navigation_icon_button_exit}
            variant="success"
            onClick={toggleModal}
          >
            <Icons
              name="exit"
              size="18"
              className={styles.navigation_icon_exit}
              alt="logout"
            />
          </button>
          <button
            type="button"
            className={styles.navigation_header_logout}
            alt="logout"
            variant="success"
            onClick={toggleModal}
          >
            <p>Выйти</p>
          </button>
        </div>
      </div>

      <Modal
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={toggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-description" className={styles.modalTitle}>
              Вы уверены,что хотите выйти?
            </p>
            <Button
              variant="outlined"
              style={{
                borderRadius: '10px',
                marginRight: '30px',
                color: 'black',
              }}
              onClick={() => dispatch(authOperations.logout())}
            >
              Да
            </Button>
            <Button
              variant="outlined"
              style={{
                backgroundColor: '#24cca7',
                borderRadius: '10px',
                marginRight: '30px',
                color: 'white',
              }}
              color="primary"
              onClick={toggleModal}
            >
              Нет
            </Button>
          </div>
        </Fade>
      </Modal>
    </header>
  );
}
