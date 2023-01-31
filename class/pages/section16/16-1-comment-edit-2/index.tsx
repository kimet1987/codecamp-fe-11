import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";

import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function staticRoutingMovedPage(): JSX.Element {
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (e: MouseEvent<HTMLButtonElement>): void => {
    const qqq = [...myIndex];
    qqq[Number(e.currentTarget.id)] = true;
    setMyIndex(qqq);
    console.log(myIndex);
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) =>
        !myIndex[index] ? (
          <div key={el._id}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        )
      )}
    </>
  );
}
