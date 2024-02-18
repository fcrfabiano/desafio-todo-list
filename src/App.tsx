import { Form } from "./components/Form";
import { PlusCircle, Trash } from "@phosphor-icons/react";
import Header from "./components/Header";
import TodoBar from "./components/TodoBar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Header />
      <TodoBar />
      <TodoList />

      {/* <Form.IconButton>
        <Trash weight='bold' />
      </Form.IconButton>
      <Form.Input
        // label="Adicione uma nova tarefa"
        placeholder='Adicione uma nova tarefa'
      />
      <Form.Checkbox /> */}
    </>
  );
}

export default App;
