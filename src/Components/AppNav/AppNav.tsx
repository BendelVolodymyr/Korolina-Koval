import { NavLink } from 'react-router-dom';
import styles from './AppNav.module.scss';

const navItems = [
  { path: '/Karolina-Koval/home', label: 'Головна' },
  { path: '/Karolina-Koval/homeworks', label: 'Домашні завдання' },
  { path: '/Karolina-Koval/drawings', label: 'Мої малюнки' },
  { path: '/Karolina-Koval/projects', label: 'Роботи' },
];

const AppNav = () => {
  return (
    <nav className={styles.navbar}>
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default AppNav;
