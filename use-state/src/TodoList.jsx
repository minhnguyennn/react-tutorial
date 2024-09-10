import { useState } from "react";

const createInitialTodos = () => {
  const initialTodos = [];
  for (let index = 0; index < 50; index++) {
    initialTodos.push({
      id: index + 1,
      item: "Item " + (index + 1),
    });
  }
  return initialTodos;
};

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Add todo..."
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (text.trim() === "") return;
          setTodos([
            {
              id: todos.length + 1,
              item: text,
            },
            ...todos,
          ]);
          setText("");
        }}
      >
        Add
      </button>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
    </>
  );
}
