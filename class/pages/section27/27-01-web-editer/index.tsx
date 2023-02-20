import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditerPage(): JSX.Element {
  // ReactQuill 만든 사람의 onChange 이므로 이벤트는 안들어 온다
  const onContents = (value: string): void => {
    console.log(value);
  };

  //   useEffect(() => {
  // 	async function aaa(): Promise<void> {
  // 		const { Modal } = await import("antd")
  // 		Modal.success({ content: "게시글 등록에 성공!!" });
  // 	}
  // 	void aaa()
  //   },[])

  const onSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); // code-splitting 성능 최적화
    Modal.success({ content: "게시글 등록에 성공!!" });
  };

  return (
    <>
      <form onSubmit={wrapFormAsync(onSubmit)}>
        <div>
          <span>작성자 :</span>
          <input type="text" />
        </div>
        <div>
          <span>패스워드 :</span>
          <input type="password" />
        </div>
        <div>
          <span>제목 :</span>
          <input type="text" />
        </div>
        <div>
          <span>내용 :</span>
          <ReactQuill onChange={onContents} />
        </div>
        <button>등록하기</button>
      </form>
    </>
  );
}
