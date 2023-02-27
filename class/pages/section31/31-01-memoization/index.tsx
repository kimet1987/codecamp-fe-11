import { useCallback, useMemo, useState } from "react";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트가 랜더링 되었습니다");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 렌더링 이전의 변수 기억하기
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 2. useCallback 으로 함수를 기억
  const onLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. useCallback 사용시 주의 사항

  const onState = useCallback((): void => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // 4. useMemo로 나만의 useCallback 만들어보기
  //   const onState2 = useMemo((): void => {
  // 	// console.log(countState + 1);
  //  setCountState((prev) => prev + 1);
  // },[])

  return (
    <>
      <div>카운트(let) : {countLet}</div>
      <button onClick={onLet}>카운트(let) 방식에서 1올리기</button>
      <br />
      <div>카운트(state) : {countState}</div>
      <button onClick={onState}>카운트(state) 방식에서 1올리기</button>

      {/* 로직과 UI 합쳐져서 유지보수시 헷갈림 */}
      {/* <br />
      <div>카운트(state) : {useCallback(() => {
			setCountState((prev) => prev + 1);
	  }, [])}</div>
      <button onClick={onState}>카운트(state) 방식에서 1올리기</button> */}
    </>
  );
}
