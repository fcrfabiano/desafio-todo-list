import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import styles from './styles.module.css';

type IconButtonProps = {

} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<IconButtonProps> = ({ ...props }) => {
  return <button className={styles.iconButton} {...props} />;
};

export default IconButton;
