import { Form } from "./components/Form";
import { PlusCircle, Trash } from "@phosphor-icons/react";
import Header from "./components/Header";
import TodoBar from "./components/TodoBar";
import TodoList from "./components/TodoList";
import { useFieldArray, useForm } from "react-hook-form";
import ToastContainer from "./components/ToastContainer";

type TodosProps = {
  todos: {
    id: number;
    name: string;
    isDone: boolean;
  }[];
};

function App() {
  const { control } = useForm<TodosProps>({
    defaultValues: {
      todos: [],
    },
  });
  const { fields: todoList, append, remove, update } = useFieldArray({
    control,
    name: "todos",
  });
  return (
    <>
      <Header />
      <TodoBar onAddTodoItem={append} />
      <TodoList todoList={todoList} onRemoveTodoItem={remove} onUpdateTodoItem={update} />
      <ToastContainer />
    </>
  );
}

export default App;
