import Icons from '../components/Icons';
import styles from './styles.module.css';
export default function ExcludeView() {
  return (
    <>
      <div className={styles.navigation_container}>
        <div className={styles.navigation_row}>
          <a className={styles.navigation_header_wallet}>
            <Icons name="wallet" className={styles.navigation_icon_wallet} />
            <p>Wallet</p>
          </a>
          <div className={styles.navigation_header}>
            <a className={styles.navigation_header_title}>
              <p>Имя</p>
            </a>
            <a className={styles.navigation_header_title}>
              <p>|</p>
            </a>
            <Icons
              name="exit"
              size="18"
              className={styles.navigation_icon_exit}
            />
            <button type="button" className={styles.navigation_header_logout}>
              <p>Выйти</p>
            </button>
          </div>
        </div>
      </div>

      <section className={styles.navigation_home_image}></section>
    </>
  );
}
