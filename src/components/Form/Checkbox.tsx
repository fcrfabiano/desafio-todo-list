import { FC, InputHTMLAttributes } from "react";

import styles from "./styles.module.css";

type CheckboxProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FC<CheckboxProps> = ({ ...props }) => {
  return <input className={styles.checkbox} type="checkbox" {...props} />;
};

export default Checkbox;
