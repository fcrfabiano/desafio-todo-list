import { FC, InputHTMLAttributes } from "react";

import styles from "./styles.module.css";
import { useFormContext } from "react-hook-form";

type InputProps = {
  name: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ name, label, ...props }) => {
  const { register } = useFormContext();

  return (
    <input id={name} {...register(name)} className={styles.input} {...props} />
  );
};

export default Input;
