import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  useEffect(() => {
    // componentWillUnmount
    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []);

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행");

    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []);

  // 2. useEffect 잘못된 사용법
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []); // 그려시고 나서 실행이다보니 무한루푸가 돌수 있음

  const CountUp = (): void => {
    setCount(1);
  };

  const Move = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={CountUp}>카운트 올리기!!</button>
      <button onClick={Move}>나가기</button>
    </>
  );
}
