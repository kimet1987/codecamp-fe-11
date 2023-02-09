import { gql, useQuery } from "@apollo/client";
// import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function staticRoutingMovedPage(): JSX.Element {
  // const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 500);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    // 검색에서 refetch 할때 search 검색어가 refetch에 이미 저장되어있는 상태 이무로 refetch 안해도 되는상태
    void refetch({ page: Number(e.currentTarget.id) });
  };
  const onSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    // setSearch(e.currentTarget.value);

    getDebounce(e.currentTarget.value);
  };
  // const onClickSearch = (): void => {
  //   void refetch({ search, page: 1 });
  // };

  return (
    <>
      검색어 입력 : <input type="text" onChange={onSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
