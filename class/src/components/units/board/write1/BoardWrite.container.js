import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";

// export 골라서 가져오기 가능 import {} from ''
// export default 하마나 가져올수 있음  import  from ''   ====> {} 없이 가져오기

export default function BoardWrite() {
  const [input, setInput] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const Submit = async () => {
    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 함
        // writer: input.writer,
        // title: input.title,
        // contents: input.contents,
        ...input,
      },
    });
    console.log(result);
  };

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  // const onChangeInput = (e) => {
  //     setInput((prev) => ({
  //         ...input,
  //         [e.target.id]: e.target.value
  //     }))
  // };

  return <BoardWriteUI Submit={Submit} onChangeInput={onChangeInput} />;
}
