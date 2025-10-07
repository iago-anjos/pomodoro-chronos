import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunMediumIcon,
} from 'lucide-react';
import styles from './index.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink}>
        <HouseIcon />
      </a>
      <a className={styles.menuLink}>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink}>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink}>
        <SunMediumIcon />
      </a>
    </nav>
  );
}
