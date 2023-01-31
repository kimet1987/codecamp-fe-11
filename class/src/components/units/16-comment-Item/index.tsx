import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit ? (
        <div>
          <span>{props.el.title}</span>
          <span>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </>
  );
}
