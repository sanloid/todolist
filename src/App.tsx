import { useLocalStorage } from "react-use";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces/ITodo";
import { Button, Input } from "antd";
import { useState } from "react";
import { v4 } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useLocalStorage<ITodo[]>("todolist", []);

  const [input, setInput] = useState("");

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setInput(target.value);

  const handleInputSave = () => {
    if (!input) return;
    setTodoList([
      ...(todoList?.length ? todoList : []),
      { id: v4(), name: input },
    ]);
    setInput("");
  };

  const handleDeleteItem = (id: string) => {
    if (!todoList?.length) return;
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <>
      <Button onClick={handleInputSave}>save</Button>
      <Input type="text" value={input} onChange={handleInputChange} />
      <TodoList
        todoList={todoList?.length ? todoList : []}
        removeCb={handleDeleteItem}
      />
    </>
  );
};

export default App;
