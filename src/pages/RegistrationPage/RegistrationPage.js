import RegistrationForm from "../../components/RegistrationForm";
import { Typography } from "@material-ui/core";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <>
      <div className={styles.authBackdrop}>
      </div>
    <div className={styles.container}>
      <div className={styles.backgroundWrapper}>
      <Typography variant="h1" component="h1" className={styles.title}>
      Finance App
      </Typography>
        {/* <h1 className={styles.title}>Finance App</h1> */}
      </div>
      <RegistrationForm />
    </div>
    </>
  );
};

export default RegistrationPage;
