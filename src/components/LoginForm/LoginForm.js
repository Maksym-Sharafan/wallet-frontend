// import { Formik, Form } from "formik";
// import { TextField } from "../RegistrationForm/TextField";
// import * as Yup from "yup";

//
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
//

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //
  // const [name, setName] = useState("");

  //move case "name" and return setName(value);
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      // case "name":
      //   return setName(value);
      default:
        return;
    }
  };

  //убрать setName("") name
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      authOperations.login({
        email,
        password,
        // name
      }),
    );
    setEmail('');
    setPassword('');
    // setName("");
  };

  // const validate = Yup.object({
  //   email: Yup.string().email("Email is invalid").required("Email is required"),
  //   password: Yup.string()
  //     .min(6, "Password must be at least 1 character")
  //     .max(12, "Must be 12 characters or less")
  //     .required("Password is required"),
  // });

  return (
    // <Formik
    //   initialValues={{
    //     email: "",
    //     password: "",
    //   }}
    //   validationSchema={validate}
    //   onSubmit={async ({ name, email, password }) => {
    //     console.log(name, email, password);
    //     dispatch(authOperations.signup({ name, email, password }));
    //     window.location.reload();
    //   }}
    // >
    //   {() => (
    //     <div
    //     //   className={styles.container}
    //     >
    //       <Form
    //       //   className={styles.form}
    //       >
    //         <TextField name="email" placeholder="E-mail" type="email" />
    //         <TextField name="password" placeholder="Пароль" type="password" />

    //         <button type="submit">Вход</button>
    //         {/* <Link to="/login">
    //           <button type="button">Вход</button>
    //         </Link> */}
    //       </Form>
    //     </div>
    //   )}
    // </Formik>
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="E-mail"
        />
      </label>

      <label>
        <input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Пароль"
        />
      </label>
      {/* поле ненужно после удаление убрать name из handleSubmit  и handleChange */}
      {/* <label>
        <input
          label="Password"
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="name"
        />
      </label> */}
      {/* поле ненужно */}
      <button>Вход</button>
    </form>
  );
};

export default LoginForm;
