import { useCallback, useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [countOther, setCountOther] = useState(0);

  const increase = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrease = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const increaseOther = useCallback(() => {
    setCountOther(countOther + 1);
  }, [countOther]);

  const decreaseOther = useCallback(() => {
    setCountOther(countOther - 1);
  }, [countOther]);

  useEffect(() => {
    console.log("Component re-rendered, and increase function was recreated");
  }, [decrease]);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <div>Count other: {countOther}</div>
      <button onClick={increaseOther}>+</button>
      <button onClick={decreaseOther}>-</button>
    </>
  );
}
