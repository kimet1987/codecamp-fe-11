import { useState } from "react";

export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const Submit = async () => {};

  const onWriter = (e) => {
    setWriter(e.target.value);
  };
  const onTitle = (e) => {
    setTitle(e.target.value);
  };
  const onContents = (e) => {
    setContents(e.target.value);
  };
  return (
    <div>
      작성자: <input type="text" onChange={onWriter} />
      제목: <input type="text" onChange={onTitle} />
      내용: <input type="text" onChange={onContents} />
      <button onClick={Submit}>GRAPHQL - API 요청하기</button>
    </div>
  );
}
