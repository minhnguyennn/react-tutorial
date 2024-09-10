import { useRef } from "react";

export default function AccessDomElements() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}
