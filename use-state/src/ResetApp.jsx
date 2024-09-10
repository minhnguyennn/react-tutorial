import { useState } from "react";

export default function ResetApp() {
  const [version, setVersion] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setVersion((preState) => preState + 1)}>
          Reset
        </button>
      </div>
      <Form key={version} />
    </>
  );
}

const Form = () => {
  const [name, setName] = useState("Taylon");
  return (
    <>
      <input
        value={name}
        placeholder="Add name..."
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </>
  );
};
