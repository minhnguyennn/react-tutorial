import { useMemo, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <>
      <h1>My Todos</h1>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={() => setTodos((preTodos) => [...preTodos, "New Todo"])}>
        Add Todo
      </button>
      <hr />
      <label>
        Count: {count}
        <button onClick={() => setCount((preCount) => preCount + 1)}>+</button>
      </label>
      <h1>Expensive Calculation</h1>
      {calculation}
    </>
  );
}

const expensiveCalculation = (num) => {
  for (let index = 0; index < 1000000000; index++) {
    num = num + 1;
  }
  return num;
};
