import { useState } from "react";
import ChildWithMapPage from "./02-child";
import { v4 as uuid4 } from "uuid";

export default function ParentWithMapPage(): JSX.Element {
  console.log("부모가 렌더링 됩니다.");
  const [data, setDate] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");

  const onChange = (): void => {
    setDate("영희는 오늘 저녁을을 맛없게 먹었습니다.");
  };
  return (
    <>
      {/* {data.split(" ").map((el, idx) => (
        <ChildWithMapPage key={idx} el={el} /> // 1. 메모시 key 또는 el의 변경된 부분만 리렌터링 됨
      ))} */}

      {data.split(" ").map((el, idx) => (
        <ChildWithMapPage key={uuid4()} el={el} /> // 2. memo를 해도 key 자체가 변경되어 props 넘어가므로 리렌더링 됨
      ))}

      <button onClick={onChange}>체인지</button>
    </>
  );
}
