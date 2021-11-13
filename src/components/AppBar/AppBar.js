// import { useSelector } from "react-redux";
import Navigation from '../Navigation/Navigation.js';
// // import UserMenu from "../UserMenu/UserMenu";
// // import AuthNav from "../AuthNav/AuthNav";
// import { authSelectors } from "../redux/auth";
import styles from './AppBar.module.css';

export default function Appbar() {
  // //   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
      <header className={styles.navigation_header}>
          
          
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}
