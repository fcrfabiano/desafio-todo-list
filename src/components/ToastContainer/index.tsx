import { FC, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./styles.module.css";
import Message from "../Message";
import { toasterEmmiter } from "../../lib/toast";

type MessateType = {
  id: string;
  message: string;
  variant: "success" | "error" | "info" | "default";
};

const ToastContainer: FC = () => {
  const [messages, setMessages] = useState<MessateType[]>([]);
  const toastContainer = document.getElementById("toast");

  useEffect(() => {
    const callback: any = ({ data }: any) => {
      console.log(data);
      setMessages((prevState) => prevState.concat(data));
    };

    toasterEmmiter.on("toast", callback);

    return () => {
      toasterEmmiter.off("toast", callback);
    };
  }, []);

  const handleRemove = useCallback((id: string) => {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.container}>
      {messages.map(({ id, message, variant }) => (
        <Message
          key={id}
          message={message}
          onRemove={() => handleRemove(id)}
          variant={variant}
        />
      ))}
    </div>,
    toastContainer as HTMLElement
  );
};

export default ToastContainer;
