import { useEffect, useRef, useState } from "react";

export default function App(params) {
  const [input, setInput] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input 
        type="text"
        value={input}
        placeholder="Add text...."
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
