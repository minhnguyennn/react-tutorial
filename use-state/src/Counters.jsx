import { useCallback, useState } from "react";

export default function Counters() {
  const [age, setAge] = useState(42);
  const handleClick1 = useCallback(() => {
    setAge((preAge) => preAge + 1);
  }, []);
  const handleClick3 = useCallback(() => {
    setAge((preAge) => preAge + 1);
    setAge((preAge) => preAge + 1);
    setAge((preAge) => preAge + 1);
  }, []);

  return (
    <>
      <p>Your age: {age}</p>
      <button onClick={handleClick1}>+1</button>
      <button onClick={handleClick3}>+3</button>
    </>
  );
}
