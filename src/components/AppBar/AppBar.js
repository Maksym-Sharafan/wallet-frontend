import Media from 'react-media';
import Navigation from '../Navigation/Navigation.js';
import Balance from '../Balance';
import Currency from '../Currency';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <div className={styles.appBar} >
      <div className={styles.nav_balance_wrapper}>
        <Navigation />
        <Balance />
      </div>
      <Media query="(min-width: 768px)" render={() =>
      (
        <Currency />
      )}
      />
    </div>
  );
}
// className = { styles.navigation_header }
