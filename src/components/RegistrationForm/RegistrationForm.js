import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
// import { useState } from "react";
import { authOperations } from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";
import { Grid, InputAdornment } from "@material-ui/core";
import Textfield from "../FormsUI/Textfield";
import Button from "../FormsUI/Button";
// import ProgressBar from './ProgressBar'

import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LockIcon from '@material-ui/icons/Lock';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Icons from '../Icons'

import { useStyles } from "../FormsUI/theme";

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  progress: 0,
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [progress, setProgress] = useState(0);
  // const [values, setValues] = useState(initialValues);

  const validate = Yup.object({
    name: Yup.string()
      .min(1, "Name must be at least 1 character")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 character")
      .max(12, "Must be 12 characters or less")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

//   const ProgressChange = (event) => {
//     let progress = 0;
//     if(values.email !== '') {
//       progress += 25;
//     }
//     if(values.password !== '') {
//       progress += 25;
//     }
//     if(values.confirmPassword !== '') {
//       progress += 25;
//     }
//     if(values.name !== '') {
//       progress += 25;
//     }
//     setValues({
//       ...values,
//       progress,
//     });
//     console.log("values.email: ", values.email)
//     console.log("values.password: ", values.password)
//     console.log("values.confirmPassword: ", values.confirmPassword)
//     console.log("values.name: ", values.name)
// }

  // const handleInputChange = (event) => {
  //   const {name, value} = event.target;
  //   setValues({
  //     ...values,
  //     [name]: value
  //   })
  // }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={async ({ name, email, password }, actions) => {
        await dispatch(authOperations.signup({ name, email, password }));
        actions.resetForm();
      }}
    >
      <Form className={classes.form}>
        <Grid container spacing={3}>

          <Grid item xs={12} className={classes.iconWrapper}>
          <Icons name="wallet" className={classes.logoIconWallet}/>
          <p className={classes.logoTitle}>Wallet</p>
          </Grid>

          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="email"
              name="email"
              label="E-mail"
              color="primary"
              // value={values.email}
              // onBlur={ProgressChange}
              // onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRoundedIcon color="secondary" className={classes.icon}/>
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
              // value={values.password}
              // onBlur={ProgressChange}
              // onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="secondary" className={classes.icon}/>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="password"
              name="confirmPassword"
              label="Подтвердите пароль"
              // value={values.confirmPassword}
              // onBlur={ProgressChange}
              // onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="secondary" className={classes.icon}/>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* <Grid item xs={12}>
          <ProgressBar value={values.progress}/>
          </Grid> */}

          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="text"
              name="name"
              label="Ваше имя"
              // value={values.name}
              // onBlur={ProgressChange}
              // onChange={handleInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxRoundedIcon color="secondary" className={classes.icon}/>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid className={classes.btnContainer} item xs={12}>
            <Button className={classes.btnPrimary}>Регистрация</Button>
          </Grid>
          <Grid className={classes.btnContainer} item xs={12}>
            <Link to="/login">
              <Button className={classes.btnSecondary} variant="outlined">
                Вход
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
