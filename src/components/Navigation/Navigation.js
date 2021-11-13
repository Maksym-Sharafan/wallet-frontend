import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <div class={styles.container}>
    <nav className={styles.nav_link}>
      <NavLink to="/home" className={styles.link} end>
        Главная
      </NavLink>
      <NavLink end to="/diagram" className={styles.link}>
        Статистика
      </NavLink>
    </nav>
  </div>
);
export default Navigation;
