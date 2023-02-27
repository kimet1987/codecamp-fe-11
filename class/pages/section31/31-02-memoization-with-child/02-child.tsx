import { memo } from "react";

function Child(): JSX.Element {
  console.log("자식이 렌더링 됩니다.");
  return (
    <>
      <div>===================================================</div>
      <h2>저는 자식 컴포넌트 입니다!!</h2>
      <div>===================================================</div>
    </>
  );
}
export default memo(Child);
