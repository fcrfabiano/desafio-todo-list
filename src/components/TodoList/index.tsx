import { FC } from "react";

import styles from "./styles.module.css";
import { ClipboardText } from "@phosphor-icons/react";
import Task from "../Task";

const TodoList: FC = () => {
  const todoList = [
    {
      id: crypto.randomUUID(),
      todo: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
    {
      id: crypto.randomUUID(),
      todo: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
    {
      id: crypto.randomUUID(),
      todo: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false,
    },
    {
      id: crypto.randomUUID(),
      todo: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: true,
    },
    {
      id: crypto.randomUUID(),
      todo: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: true,
    },
  ];

  const todosDone = todoList.reduce((acc, curr) => {
    if (curr.isDone) {
      acc += 1;
    }

    return acc;
  }, 0);

  const totalTodos = todoList.length;

  return (
    <main className={styles.todoList}>
      <header>
        <p className={styles.total}>
          Tarefas criadas
          <span className={styles.counter}>{totalTodos}</span>
        </p>
        <p className={styles.done}>
          Concluídas
          <span className={styles.counter}>
            {todosDone} de {totalTodos}
          </span>
        </p>
      </header>

      <article
        className={`${styles.content} ${
          totalTodos === 0 ? styles.contentWithBorderTop : ""
        }`}
      >
        {totalTodos === 0 && (
          <>
            <ClipboardText size={76} weight='thin' />

            <span>
              <p className={styles.bold}>
                Você ainda não tem tarefas cadastradas
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
          </>
        )}

        {todoList.map(({ id, todo, isDone }) => (
          <Task key={id} id={id} todo={todo} isDone={isDone} />
        ))}
      </article>
    </main>
  );
};

export default TodoList;
