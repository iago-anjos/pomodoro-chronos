import type React from 'react';
import styles from './index.module.css';

type LogoProps = {
  children: React.ReactNode;
};

export function Logo({ children }: LogoProps) {
  return (
    <div className={styles.logo}>
      <a href='#' className={styles.logoLink}>
        {children}
        <span>Chronos</span>
      </a>
    </div>
  );
}
