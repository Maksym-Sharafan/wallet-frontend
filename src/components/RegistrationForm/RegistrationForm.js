import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";

import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Textfield from "../FormsUI/Textfield";
import Button from "../FormsUI/Button";

const useStyles = makeStyles({
  form: {
    "@media(min-width: 768px)": {
      maxWidth: 540,
      heigth: 616,
      paddingTop: 40,
      paddingBottom: 60,
      paddingLeft: 65,
      paddingRight: 65,
      marginLeft: "auto",
      marginRight: "auto",
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
    backgroundColor: "#24CCA7",
    borderRadius: 20,

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
    borderRadius: 20,

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
        console.log(name, email, password);
        await dispatch(authOperations.signup({ name, email, password }));
        // window.location.reload();
      }}
    >
      <Form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            Logo
          </Grid>
          <Grid item xs={12}>
            Logo
          </Grid>
          <Grid item xs={12}>
            Logo
          </Grid>

          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="email"
              name="email"
              label="E-mail"
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="password"
              name="password"
              label="Пароль"
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="password"
              name="confirmPassword"
              label="Подтвердите пароль"
            />
          </Grid>
          <Grid item xs={12}>
            <Textfield
              className={classes.input}
              type="text"
              name="name"
              label="Ваше имя"
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
