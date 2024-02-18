import { FC } from "react";

import styles from "./styles.module.css";
import Checkbox from "../Form/Checkbox";
import { Trash } from "@phosphor-icons/react";
import { Form } from "../Form";

type TaskProps = {
  id: string;
  todo: string;
  isDone: boolean;
};

const Task: FC<TaskProps> = ({ id, todo, isDone }) => {
  return (
    <section className={styles.task}>
      <Checkbox checked={isDone} />

      <span className={isDone ? styles.done : styles.notDone}>{todo}</span>

      <Form.IconButton onClick={() => alert(`Remover o item ${id}`)}>
        <Trash weight='bold' />
      </Form.IconButton>
    </section>
  );
};

export default Task;
