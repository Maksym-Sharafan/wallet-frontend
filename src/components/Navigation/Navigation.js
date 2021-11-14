import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import Icons from '../../components/Icons';
const Navigation = () => (
  <div class={styles.navigation_container}>
    <nav className={styles.navigation_nav_link}>
      <NavLink to="/home" className={styles.navigation_link} end>
        <Icons name="home" className={styles.navigation_icon_home} />
        <p className={styles.navigation_name_home}> Главная </p>
      </NavLink>
      <NavLink end to="/diagram" className={styles.navigation_link}>
        <Icons name="statistic" className={styles.navigation_icon_statistic} />
        <p className={styles.navigation_name_statistic}>Статистика</p>
      </NavLink>
      <NavLink end to="/exclude" className={styles.navigation_link}>
        <Icons name="dollar" className={styles.navigation_icon_dollar} />
           </NavLink>
    </nav>
  </div>
);
export default Navigation;
