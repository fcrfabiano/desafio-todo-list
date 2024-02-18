import { FC } from "react";

import styles from "./styles.module.css";
import { ClipboardText } from "@phosphor-icons/react";

const TodoList: FC = () => {
  return (
    <main className={styles.todoList}>
      <header>
        <p className={styles.total}>
          Tarefas criadas
          <span className={styles.counter}>0</span>
        </p>
        <p className={styles.done}>
          Concluídas
          <span className={styles.counter}>0</span>
        </p>
      </header>

      <article className={styles.content}>
        <ClipboardText size={76} weight='thin' />

        <span>
          <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </span>
      </article>
    </main>
  );
};

export default TodoList;
