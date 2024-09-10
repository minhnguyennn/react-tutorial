import { useCallback, useState } from "react";

export default function MyCheckBox() {
  const [liked, setLiked] = useState(true);
  const handleChange = useCallback((e) => {
    setLiked(e.target.checked);
  }, []);
  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />I liked
        this
      </label>
      <p>You {liked ? "liked" : "did not like"} this.</p>
    </>
  );
}
