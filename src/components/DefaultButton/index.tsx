import styles from './index.module.css';
import type React from 'react';

type DefaultButtonProps = {
  icon: React.ReactNode;
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, ...props }: DefaultButtonProps) {
  return (
    <>
      <button className={styles.button} {...props}>
        {icon}
      </button>
    </>
  );
}
