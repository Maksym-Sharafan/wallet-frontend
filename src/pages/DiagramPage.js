import styles from './styles.module.css';
import Icons from '../components/Icons';
export default function DiagramPage() {
  return (
    <>
      <div class={styles.navigation_container}>
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
              Выйти
            </button>
          </div>
        </div>
      </div>

      <section className={styles.navigation_home_image}></section>
    </>
  );
}
