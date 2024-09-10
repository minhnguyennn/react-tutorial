export default function ChildComponent({ onClick }) {
  console.log("Oke");
  return (
    <>
      <button onClick={onClick}>Increment</button>
    </>
  );
}
