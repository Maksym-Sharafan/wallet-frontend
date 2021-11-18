import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";

import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LockIcon from '@material-ui/icons/Lock';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

import { Grid, InputAdornment } from "@material-ui/core";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import Textfield from "../FormsUI/Textfield";
import Button from "../FormsUI/Button";
import Icons from "../Icons/Icons";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f00"
    }
  }
})

const useStyles = makeStyles({
  root: {
    "& .MuiSvgIcon-root": {
      fill: 'inherit'
    },
    "& .MuiSvgIcon-colorError": {
      color: '#f00'
    }
  },
  form: {
    maxWidth: 320,
    "@media(min-width: 768px)": {
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
    // backgroundColor: "#24CCA7",
    // borderRadius: 20,

    "&:hover": {
      backgroundColor: "#198e74",
    },

    "@media(min-width: 768px)": {
      width: 300,
    },
  },
  btnSecondary: {
    width: 280,
    height: 50,
    color: "#4A56E2",
    // borderRadius: 20,

    "@media(min-width: 768px)": {
      width: 300,
    },
  },
  input: {
    "& label.Mui-focused": {
      color: "#24CCA7",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#24CCA7",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: "red",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
    },
  },
});

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

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

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const isAuth = useSelector(authSelectors.isAuth);

  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={validate}
      onSubmit={async ({ name, email, password }) => {
        // console.log(name, email, password);
        await dispatch(authOperations.signup({ name, email, password }));
        // window.location.reload();
      }}
    >
      <Form className={classes.form}>
        <Grid container spacing={4}>
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRoundedIcon color="secondary" />
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="secondary" />
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="secondary" />
                    {/* <Icons name="email" color="inherit" size="24"/> */}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="text"
              name="name"
              label="Ваше имя"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxRoundedIcon color="secondary" />
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
