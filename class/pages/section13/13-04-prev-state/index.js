import { useState } from "react";

export default function CounterLetDocument() {
  const [count, setCount] = useState(0);
  //   function onClickCountUp() {
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   }
  function onClickCountUp() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  // function onClickCountDown() {
  //     setCount(count - 1);
  // }

  return (
    <div>
      <div id="aaa">{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기!!</button> */}
    </div>
  );
}
