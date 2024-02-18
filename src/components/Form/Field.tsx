import { FC, HTMLAttributes } from "react";

import styles from "./styles.module.css";

type FieldProps = {} & HTMLAttributes<HTMLDivElement>;

const Field: FC<FieldProps> = ({ ...props }) => {
  return <div className={styles.field} {...props} />;
};

export default Field;
