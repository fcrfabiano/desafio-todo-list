import { FC } from "react";

import styles from "./styles.module.css";
import Checkbox from "../Form/Checkbox";
import { Trash } from "@phosphor-icons/react";
import { Form } from "../Form";

type TaskProps = {
  id: number;
  todo: string;
  isDone: boolean;
  onRemove: () => void;
  onUpdate: () => void;
};

const Task: FC<TaskProps> = ({ id, todo, isDone, onRemove, onUpdate }) => {
  return (
    <section className={styles.task}>
      <Checkbox checked={isDone} onChange={onUpdate} />

      <span className={isDone ? styles.done : styles.notDone}>{todo}</span>

      <Form.IconButton onClick={onRemove}>
        <Trash weight='bold' />
      </Form.IconButton>
    </section>
  );
};

export default Task;
