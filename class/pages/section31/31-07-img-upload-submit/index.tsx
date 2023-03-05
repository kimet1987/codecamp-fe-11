import { gql, useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";
import {
  wrapAsync,
  wrapFileAsync,
} from "../../../src/commons/libraries/asyncFunc";
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
  const [file, setFile] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const Submit = async (): Promise<void> => {
    // 1. uploadFile

    const resultFile = await uploadFile({
      variables: { file },
    });
    const url = resultFile.data?.uploadFile.url;

    // 2. createBoard
    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 함
        createBoardInput: {
          writer: "aaa",
          title: "bbb",
          contents: "ccc",
          password: "1234",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onFile = async (e?: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = e?.target.files?.[0]; // 배열로 들어오는 이유 : multiple 속성일 떄 여러개 등록 가능
    if (file === undefined) return;
    console.log(file);

    // 1. 임시 URL 생성 => 내 브라운저에서만 접근 가능
    // const result = URL.createObjectURL(file);
    // console.log(result);
    // 최신 버전

    // 2. 임시 URL 생성 => 다른 브라우저에서도 접근 가능
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      console.log(e.target?.result); // 게시판에서 event.target.id 를 쓰면 eslint 가 잡았던 이유 ==> 태그만을 가르치지 않음
      if (typeof e.target?.result === "string") {
        setImgUrl(e.target?.result);
        setFile(file);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={wrapFileAsync(onFile)} />
      {/* <img src={`https://storage.googleapis.com/${imgUrl}`} /> */}
      <img src={imgUrl} />
      <button onClick={wrapAsync(Submit)}>게시글 등록하기</button>
    </>
  );
}
