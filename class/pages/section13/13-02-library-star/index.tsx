import { StepForwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

const MyIcon = styled(StepForwardOutlined)`
  color: red;
  font-size: 50px;
`;

export default function libraryIconPage(): JSX.Element {
  const onClickDel = (e: MouseEvent<HTMLDivElement>): void => {
    console.log(e?.currentTarget.id);
  };

  return (
    <div id="삭제할 게시글 ID" onClick={onClickDel}>
      <MyIcon />;
    </div>
  );
}
