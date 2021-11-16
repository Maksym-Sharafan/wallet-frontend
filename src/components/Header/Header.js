import styles from './Header.module.css';
import Icons from '../Icons';

export default function Header() {
  return (
    <header class={styles.navigation_container}>
      <div className={styles.navigation_row}>
        <div className={styles.navigation_header_wallet}>
          <Icons name="wallet" className={styles.navigation_icon_wallet} />
          <p>Wallet</p>
        </div>
        <div className={styles.navigation_header}>
          <p className={styles.navigation_header_title}>Имя</p>

          <p className={styles.navigation_header_title}>|</p>
          <button
            type="button"
            className={styles.navigation_icon_button_exit}
          >
            <Icons
              name="exit"
              size="18"
              className={styles.navigation_icon_exit}
            />
          </button>
          <button type="button" className={styles.navigation_header_logout}>
            <p>Выйти</p>
          </button>
        </div>
      </div>
    </header>
  );
}
