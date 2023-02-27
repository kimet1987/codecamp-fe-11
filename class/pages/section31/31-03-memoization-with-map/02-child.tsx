import { memo } from "react";

interface IChildProps {
  el: string;
}

function ChildWithMapPage(props: IChildProps): JSX.Element {
  console.log("자식이 렌더링 됩니다.");
  return (
    <>
      <span>{props.el}</span>
    </>
  );
}

export default memo(ChildWithMapPage);
