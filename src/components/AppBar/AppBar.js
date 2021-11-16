import Navigation from '../Navigation/Navigation.js';
import Balance from '../Balance';
import Currency from '../Currency';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <div className={styles.appBar} >
      <Navigation />
      <Balance />
      <Currency />
    </div>
  );
}
// className = { styles.navigation_header }
