import { FC } from "react";

import styles from "./styles.module.css";
import { Form } from "../Form";
import { PlusCircle } from "@phosphor-icons/react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todo } from "../../lib/schemas/validation";
import { z } from "zod";
import { toast } from "../../lib/toast";

type Todo = z.infer<typeof todo>;

type TodoBarProps = {
  onAddTodoItem: (obj: any) => void;
};

const TodoBar: FC<TodoBarProps> = ({ onAddTodoItem }) => {
  const createTodoList = useForm<Todo & { todos: any[] }>({
    criteriaMode: "all",
    defaultValues: {
      todo: "",
      todos: [],
    },
    mode: "all",
    resolver: zodResolver(todo),
  });

  const { handleSubmit } = createTodoList;

  const handleCreateTodo = ({ todo }: Todo) => {
    onAddTodoItem({
      name: todo,
      isDone: false,
    });

    toast.success("Nova tarefa adicionada!");
  };

  return (
    <FormProvider {...createTodoList}>
      <form
        onSubmit={handleSubmit(handleCreateTodo)}
        className={styles.todoBar}
      >
        <Form.Field>
          <Form.Input name='todo' placeholder='Adicione uma nova tarefa' />
          <Form.ErrorMessage field='todo' />
        </Form.Field>
        <Form.Button
          type='submit'
          endIcon={<PlusCircle size={20} weight='bold' />}
        >
          Criar
        </Form.Button>
      </form>
    </FormProvider>
  );
};

export default TodoBar;
