import React, { useId } from 'react';
import styles from './index.module.css';

type DefaultInputProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ labelText, ...props }: DefaultInputProps) {
  const inputID = useId();
  return (
    <>
      {labelText && (
        <label htmlFor={inputID} className={styles.label}>
          {labelText}
        </label>
      )}
      <input id={inputID} {...props} className={styles.input} />
    </>
  );
}
