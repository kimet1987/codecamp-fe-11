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
  const [imgUrls, setImgUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const Submit = async (): Promise<void> => {
    // 1. uploadFile

    // 1-1  안좋은 예제 - await를 매번 기다림 => for문으로 사용해도 마찬가지
    // const resultFile0 = await uploadFile({
    //   variables: { file: files[0] },
    // });
    // const resultFile1 = await uploadFile({
    //   variables: { file: files[1] },
    // });
    // const resultFile2 = await uploadFile({
    //   variables: { file: files[2] },
    // });

    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;

    // const resultUrls = [url0, url1, url2];

    // 1-2 좋은 예제 - Promise.all 사용

    // const results = Promise.all([
    //   uploadFile({
    //     variables: { file: files[0] },
    //   }),
    //   uploadFile({
    //     variables: { file: files[1] },
    //   }),
    //   uploadFile({
    //     variables: { file: files[2] },
    //   }),
    // ]);

    // 1-3 좋은 예제 - Promise.all 사용 => 리팩토링

    // const files = [file0, file1, file2]
    const results = await Promise.all(
      files.map(async (el) => await uploadFile({ variables: { file: el } }))
    );

    console.log(results); // [ resultFile0, resultFile1, resultFile2 ]
    const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0, url1, url2]

    // 2. createBoard
    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 함
        createBoardInput: {
          writer: "aaa",
          title: "bbb",
          contents: "ccc",
          password: "1234",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onFile =
    (index: number) =>
    async (e?: ChangeEvent<HTMLInputElement>): Promise<void> => {
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
          const tempUrls = [...imgUrls];
          tempUrls[index] = e.target?.result;
          setImgUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);

          // imgUrls[index] = e.target?.result
          // setImgUrls(imgUrls)
          // setImgUrl(e.target?.result);
          // setFile(file);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={wrapFileAsync(onFile(0))} />
      <input type="file" onChange={wrapFileAsync(onFile(1))} />
      <input type="file" onChange={wrapFileAsync(onFile(2))} />

      {/* <img src={`https://storage.googleapis.com/${imgUrl}`} /> */}
      <img src={imgUrls[0]} />
      <img src={imgUrls[1]} />
      <img src={imgUrls[2]} />

      <button onClick={wrapAsync(Submit)}>게시글 등록하기</button>
    </>
  );
}
