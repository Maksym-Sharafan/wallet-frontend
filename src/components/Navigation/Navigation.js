import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import Icons from '../../components/Icons';

const isActiveFn = ({ isActive }) => {

  return isActive ? styles.active : styles.navigation_link;
}

const Navigation = () => {

  return (
    <div className={styles.navigation_container}>
      <nav className={styles.navigation_nav}>
        <NavLink
          to="/home"
          className={isActiveFn}
        >
          <Icons
            name="home"
            className={styles.navigation_icon}

          />
          <p className={styles.navigation_name_statistic}>Главная</p>
        </NavLink>
        <NavLink
          end
          to="/diagram"
          className={isActiveFn}
        >
          <Icons name="statistic" className={styles.navigation_icon} />
          <p className={styles.navigation_name_statistic}>Статистика</p>
        </NavLink>
        <NavLink
          end
          to="/exclude"
          className={isActiveFn}
        >
          <Icons name="dollar" className={styles.navigation_icon_dollar} />
        </NavLink>
      </nav>
    </div>
  )
};
export default Navigation;
