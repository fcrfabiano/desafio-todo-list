import { FC, useEffect } from "react";

import styles from "./styles.module.css";
import { CheckCircle } from "@phosphor-icons/react";

type MessageProps = {
  message: string;
  variant: "success" | "error" | "info" | "default";
  onRemove: () => void;
};

const Message: FC<MessageProps> = ({
  message,
  variant = "default",
  onRemove,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemove();
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className={`${styles.message} ${styles[variant]}`}>
      <CheckCircle size={20} color='var(--success)' weight='bold' />
      {message}
    </div>
  );
};

export default Message;
