import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import { Link } from 'react-router-dom';
import { Grid, InputAdornment } from '@material-ui/core';
import Textfield from '../FormsUI/Textfield';
import Button from '../FormsUI/Button';

import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LockIcon from '@material-ui/icons/Lock';
import Icons from '../Icons';
import { useStyles } from '../FormsUI/theme';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
};

const validate = Yup.object({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 character')
    .max(12, 'Must be 12 characters or less')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={validate}
      onSubmit={({ email, password }) => {
        dispatch(authOperations.login({ email, password }));
      }}
    >
      <Form className={classes.form}>
        <Grid container spacing={4}>
          <Grid item xs={12} className={classes.iconWrapper}>
            <Icons name="wallet" className={classes.logoIconWallet} />
            <p className={classes.logoTitle}>Wallet</p>
          </Grid>

          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="email"
              name="email"
              label="E-mail"
              color="primary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRoundedIcon
                      color="secondary"
                      className={classes.icon}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="password"
              name="password"
              label="Пароль"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="secondary" className={classes.icon} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid className={classes.btnContainer} item xs={12}>
            <Button className={classes.btnPrimary}>Вход</Button>
          </Grid>
          <Grid className={classes.btnContainer} item xs={12}>
            <Link to="/signup">
              <Button className={classes.btnSecondary} variant="outlined">
                Регистрация
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default LoginForm;
