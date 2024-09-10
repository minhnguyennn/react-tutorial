import { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(newTodoTitle);
    setNewTodoTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}
