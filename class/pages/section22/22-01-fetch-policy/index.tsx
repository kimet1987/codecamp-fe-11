import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import FetchPolicyEx from "../../../src/components/units/22-01-fetch-moved";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function staticRoutingMovedPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const routuer = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // 새로운 컴포넌트 등장시에도 글로벌 스테이스 값이 유지되는지 확인
  const onOpen = (): void => {
    setIsOpen(true);
  };

  // 페이지 이동시에도 글로벌 스테이스 값이 유지 되는지 확인
  const onMoved = (): void => {
    routuer.push("/section22/22-01-fetch-moved");
  };

  return (
    <>
      <button onClick={onOpen}>
        버튼을 클릭하면 새로운 컴포넌트가 나타납니다!!
      </button>
      {isOpen && <FetchPolicyEx />}
      <button onClick={onMoved}>2. 페이지 이동</button>
    </>
  );
}
