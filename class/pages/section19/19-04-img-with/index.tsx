import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { chkValidationFile } from "../../../src/commons/libraries/vaildation";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

export const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImgUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");
  const ImgRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onFile = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = e.target.files?.[0]; // 배열로 들어오는 이유 : multiple 속성일 떄 여러개 등록 가능

    const isValid = chkValidationFile(file);
    if (!isValid) return;

    console.log(file);
    const result = await uploadFile({
      variables: { file },
    });

    setImgUrl(result.data?.uploadFile.url ?? "");
  };

  const onImg = (): void => {
    // document.getElementById("파일 ID")?.click()
    ImgRef.current?.click();
  };

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const Submit = async (): Promise<void> => {
    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 함
        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234",
          images: [imgUrl],
        },
      },
    });
    console.log(result);
  };

  const onWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };
  const onTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const onContents = (e: ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  return (
    <>
      작성자: <input type="text" onChange={onWriter} />
      제목: <input type="text" onChange={onTitle} />
      내용: <input type="text" onChange={onContents} />
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onImg}
      >
        버튼
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onFile}
        ref={ImgRef}
        // accept={}
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      <button onClick={Submit}>GRAPHQL - API 요청하기</button>
    </>
  );
}
