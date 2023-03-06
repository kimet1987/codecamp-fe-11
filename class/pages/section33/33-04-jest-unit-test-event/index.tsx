import { useState } from "react";

export default function JestUnitTestPage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onCount = (): void => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div role="count">{count}</div>

      <button role="count-btn" onClick={onCount}>
        카운트 올리기
      </button>
    </>
  );
}
