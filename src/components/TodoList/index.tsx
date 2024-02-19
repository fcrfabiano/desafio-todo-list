import { FC } from "react";

import styles from "./styles.module.css";
import { ClipboardText } from "@phosphor-icons/react";
import Task from "../Task";

type TodoListProps = {
  onRemoveTodoItem: (id: number) => void;
  onUpdateTodoItem: (index: number, obj: any) => void;
  todoList: {
    id: number;
    name: string;
    isDone: boolean;
  }[];
};

const TodoList: FC<TodoListProps> = ({
  onRemoveTodoItem,
  onUpdateTodoItem,
  todoList,
}) => {
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

        {todoList.map(({ id, name, isDone }, index: number) => (
          <Task
            key={id}
            id={id}
            todo={name}
            isDone={isDone}
            onRemove={() => onRemoveTodoItem(id)}
            onUpdate={() =>
              onUpdateTodoItem(index, { id, name, isDone: !isDone })
            }
          />
        ))}
      </article>
    </main>
  );
};

export default TodoList;
