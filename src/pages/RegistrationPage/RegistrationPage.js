import RegistrationForm from "../../components/RegistrationForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Finance App</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
