import { useMoveTo } from "../../../src/components/commons/hooks/useMoveTo";

export default function HooksUseAuth(): JSX.Element {
  const { onMove } = useMoveTo();

  return (
    <>
      <button onClick={onMove("/boards")}>게시판으로 이동</button>
      <button onClick={onMove("/markets")}>마켓으로 이동</button>
      <button onClick={onMove("/mypages")}>마이페이지로 이동</button>
    </>
  );
}
