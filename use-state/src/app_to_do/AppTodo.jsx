import { useCallback, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

export default function AppTodo() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy milk", done: true },
    { id: 2, title: "Eat tacos", done: false },
    { id: 3, title: "Brew tea", done: false },
  ]);
  const [todoEdit, setTodoEdit] = useState(null);

  const nextId = useCallback(
    () =>
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
    [todos]
  );

  const handleAddTodo = (newTitle) => {
    if (newTitle.trim() === "") return;
    setTodos([
      ...todos,
      {
        id: nextId(),
        title: newTitle,
        done: false,
      },
    ]);
  };

  const handleEditingTodo = (id) => {
    setTodoEdit(todos.find((todo) => todo.id === id));
  };

  const handleSaveTodoEdit = (id) => {
    if (todoEdit.title.trim() === "") return;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: todoEdit.title } : todo
      )
    );
    setTodoEdit(null);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <AddTodoForm onAddTodo={handleAddTodo} />

      <TodoList
        todos={todos}
        onDeleteTodo={handleDelete}
        onToggleDone={handleToggleDone}
        onSaveTodoEdit={handleSaveTodoEdit}
        onEditingTodo={handleEditingTodo}
        todoEdit={todoEdit}
        setTodoEdit={setTodoEdit}
      />
    </>
  );
}
