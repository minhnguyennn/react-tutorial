import { useReducer } from "react";
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, complete: !todo.complete }
          : todo;
      });

    default:
      break;
  }
};

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleOnChange = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <label key={todo.id}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleOnChange(todo)}
            />
            {todo.title}
          </label>
        );
      })}
    </>
  );
}
