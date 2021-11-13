// s
import styles from './styles.module.css';
import Navigation from '../components/Navigation/Navigation';
export default function DiagramView() {
  return (
    <>
          <div class={styles.container}>
        <div className={styles.row}>
          <a className={styles.header_wallet}>
            <p>Wallet</p>
          </a>
                   <div className={styles.header}>
            <a className={styles.header_title}>
              <p>Имя</p>
            </a>
            <a className={styles.header_title}>
              <p>|</p>
            </a>
            <button
              // varient="flat"
              type="button"
              className={styles.header_logout}
            >
              Выйти
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>

      <section className={styles.home_image}>
             </section>
    </>
  );
}