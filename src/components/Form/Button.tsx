import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

import styles from './styles.module.css';

type ButtonProps = {
    endIcon?: ReactNode;
    startIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ endIcon, startIcon, children, ...props }) => {
  return <button className={styles.button} {...props}>
    {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
    {children}
    {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
  </button>;
};

export default Button;
