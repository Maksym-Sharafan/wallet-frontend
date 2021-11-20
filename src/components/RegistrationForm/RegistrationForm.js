import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authOperations } from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";
import { Grid, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Textfield from "../FormsUI/Textfield";
import Button from "../FormsUI/Button";
// import ProgressBar from './ProgressBar'

import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LockIcon from '@material-ui/icons/Lock';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';


const useStyles = makeStyles(theme => {
  return {
  root: {
  },

  form: {
    maxWidth: 320,
    // "@media(min-width: 768px)": {
    [theme.breakpoints.up('tabletMin')]: {
      maxWidth: 540,
      heigth: 616,
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: 40,
      paddingBottom: 60,
      paddingLeft: 65,
      paddingRight: 65,
      backgroundColor: "#fff",
      borderRadius: 20,
    },
  },

  btnContainer: {
    textAlign: "center",
  },

  btnPrimary: {
    width: 280,
    height: 50,

    // "@media(min-width: 768px)": 
    [theme.breakpoints.up('tabletMin')]: {
      width: 300,
    },
  },
  btnSecondary: {
    width: 280,
    height: 50,

    "&:hover": {
      color: "#4A56E2",
      border: "1px solid #4A56E2",
      backgroundColor: "rgba(74, 86, 226, .04)",
    },

    // "@media(min-width: 768px)"
    [theme.breakpoints.up('tabletMin')]: {
      width: 300,
    },
  },

  input: {
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid #24CCA7",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: "red",
    },
  },

  icon: {
    width: 24,
    height: 24,
  },
}});

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
  const [values, setValues] = useState(initialValues);
  // const isAuth = useSelector(authSelectors.isAuth);

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
          <Grid item xs={12}>
            Logo
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
                    {/* <Icons name="email" color="inherit" size="24"/> */}
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
                    {/* <Icons name="email" color="inherit" size="24"/> */}
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
                    {/* <Icons name="email" color="inherit" size="24"/> */}
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
                    {/* <Icons name="email" color="inherit" size="24"/> */}
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
