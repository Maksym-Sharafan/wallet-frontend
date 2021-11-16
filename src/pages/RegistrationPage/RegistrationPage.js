import RegistrationForm from "../../components/RegistrationForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <>
      <div className={styles.backgroundWrapper}>
        <h1 className={styles.title}>Finance App</h1>
      </div>

      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
