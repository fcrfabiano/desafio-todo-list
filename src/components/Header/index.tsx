import { FC, HTMLAttributes, InputHTMLAttributes } from "react";

import styles from "./styles.module.css";

type HeaderProps = {} & HTMLAttributes<HTMLElement>;

const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
    <header className={styles.header} {...props}>
      <img src='/Logo.svg' alt='todo' />
    </header>
  );
};

export default Header;
