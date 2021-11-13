import { ErrorMessage, useField } from "formik";

import styles from "./RegistrationForm.module.css";

export const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        className={`${styles.input} ${
          meta.touched && meta.error && "isInvalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </>
  );
};
