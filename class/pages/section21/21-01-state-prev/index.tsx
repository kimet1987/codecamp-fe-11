import { useState } from "react";

export default function CounterLetDocument(): JSX.Element {
  const [count, setCount] = useState(0);
  function onClickCountUp(): void {
    // // 1. 화살표함수
    // setCount((prev) => prev + 1);

    // // 1. 함수 선언식
    // setCount(function(prev){
    //     return prev + 1
    // })
    // 3. 매개변수 바꾸기
    setCount((eee) => eee + 1);
  }

  return (
    <div>
      <div id="aaa">{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
    </div>
  );
}
