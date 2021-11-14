import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth/auth-operations";
import { Link } from "react-router-dom";

import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  // const isAuth = useSelector(authSelectors.isAuth);

  const validate = Yup.object({
    name: Yup.string()
      .min(1, "Name must be at least 1 character")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 1 character")
      .max(12, "Must be 12 characters or less")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={async ({ name, email, password }) => {
        console.log(name, email, password);
        dispatch(authOperations.signup({ name, email, password }));
        // window.location.reload();
      }}
    >
      {() => (
        <div className={styles.container}>
          <Form className={styles.form}>
            <TextField name="email" placeholder="E-mail" type="email" />
            <TextField name="password" placeholder="Пароль" type="password" />
            <TextField
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              type="password"
            />
            <TextField name="name" placeholder="Ваше имя" type="text" />
            <button type="submit">Регистрация</button>
            <Link to="/login">
              <button type="button">Вход</button>
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegistrationForm;
