// // import { Formik, Form } from "formik";
// // import { TextField } from "../RegistrationForm/TextField";
// // import * as Yup from "yup";

// //
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { authOperations } from '../../redux/auth/auth-operations';
// //

// export const LoginForm = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   //
//   // const [name, setName] = useState("");

//   //move case "name" and return setName(value);
//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'email':
//         return setEmail(value);
//       case 'password':
//         return setPassword(value);
//       // case "name":
//       //   return setName(value);
//       default:
//         return;
//     }
//   };

//   //убрать setName("") name
//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(
//       authOperations.login({
//         email,
//         password,
//         // name
//       }),
//     );
//     setEmail('');
//     setPassword('');
//     // setName("");
//   };

//   // const validate = Yup.object({
//   //   email: Yup.string().email("Email is invalid").required("Email is required"),
//   //   password: Yup.string()
//   //     .min(6, "Password must be at least 1 character")
//   //     .max(12, "Must be 12 characters or less")
//   //     .required("Password is required"),
//   // });

//   return (
//     // <Formik
//     //   initialValues={{
//     //     email: "",
//     //     password: "",
//     //   }}
//     //   validationSchema={validate}
//     //   onSubmit={async ({ name, email, password }) => {
//     //     console.log(name, email, password);
//     //     dispatch(authOperations.signup({ name, email, password }));
//     //     window.location.reload();
//     //   }}
//     // >
//     //   {() => (
//     //     <div
//     //     //   className={styles.container}
//     //     >
//     //       <Form
//     //       //   className={styles.form}
//     //       >
//     //         <TextField name="email" placeholder="E-mail" type="email" />
//     //         <TextField name="password" placeholder="Пароль" type="password" />

//     //         <button type="submit">Вход</button>
//     //         {/* <Link to="/login">
//     //           <button type="button">Вход</button>
//     //         </Link> */}
//     //       </Form>
//     //     </div>
//     //   )}
//     // </Formik>
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         <input
//           label="Email"
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//           placeholder="E-mail"
//         />
//       </label>

//       <label>
//         <input
//           label="Password"
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//           placeholder="Пароль"
//         />
//       </label>
//       {/* поле ненужно после удаление убрать name из handleSubmit  и handleChange */}
//       {/* <label>
//         <input
//           label="Password"
//           type="name"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           placeholder="name"
//         />
//       </label> */}
//       {/* поле ненужно */}
//       <button>Вход</button>
//       <Link to="/signup">
//         <button>Регистрация</button>
//       </Link>
//     </form>
//   );
// };

// export default LoginForm;
// my sec vers
// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth/auth-operations';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//         }}
//         onSubmit={({ email, password }) => {
//           dispatch(authOperations.login({ email, password }));
//           // console.log(values);
//         }}
//       >
//         <Form>
//           <Field name="email" />
//           <Field name="password" />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };
// export default LoginForm;
// my sec vers
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

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const isAuth = useSelector(authSelectors.isAuth);

  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={validate}
      onSubmit={({ email, password }) => {
        dispatch(authOperations.login({ email, password }));
        // console.log(values);
      }}
    >
      <Form className={classes.form}>
        <Grid container spacing={4}>
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="secondary" className={classes.icon}/>
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

export default RegistrationForm;
