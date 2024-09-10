import { useState } from "react";

export default function CountLabel({ count }) {
  const [preCount, setPreCount] = useState(count);
  const [trend, setTrend] = useState(null);

  if (preCount !== count) {
    setPreCount(count);
    setTrend(count > preCount ? "increasing" : "decreasing");
  }
  
  return (
    <>
      <p>{count}</p>
      <p>The count is {trend}</p>
    </>
  );
}
