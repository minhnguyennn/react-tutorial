import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <ChildComponent onClick={handleClick} />
    </>
  );
}
