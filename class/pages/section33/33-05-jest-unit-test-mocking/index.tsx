import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { useRouter } from "next/router";

export const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const router = useRouter();

  const Submit = async (): Promise<void> => {
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          // variables 이게 $ 역할을 함
          writer,
          title,
          contents,
          password: "1234",
        },
      },
    });
    console.log(result);
    const boardId = result.data.createBoard._id;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(`/boards/${boardId}`);
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
    <div>
      작성자: <input role="input-writer" type="text" onChange={onWriter} />
      제목: <input role="input-title" type="text" onChange={onTitle} />
      내용: <input role="input-contents" type="text" onChange={onContents} />
      <button role="submit-btn" onClick={wrapAsync(Submit)}>
        GRAPHQL - API 요청하기
      </button>
    </div>
  );
}
