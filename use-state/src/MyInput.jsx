import { useCallback, useState } from "react";

export default function MyInput() {
  const [text, setText] = useState("Hello");
  const handleInputChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const handleReset = useCallback(() => {
    setText("Hello");
  }, []);
  return (
    <>
      <input value={text} onChange={handleInputChange} />
      <p>You typed: {text}</p>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
