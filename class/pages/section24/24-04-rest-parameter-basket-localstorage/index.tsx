import { gql, useQuery } from "@apollo/client";
import type {
  IBoard,
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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  //  JSON.stringify(el) 아이디 값에 넣어서 사용하는 법
  const onBasket = (basket: IBoard) => () => {
    // 1. 기존 장바구나 담은 것 가져오기
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    ); // 문자열을 객체나 배열로 바꾸기

    // 1-1. 이미 장바구니에 담긴 것인지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      alert("이미 담은 목록입니다.");
      return;
    }

    // 2. 내가 클릭한것 장바구니 추가로 담기
    delete basket.__typename; // 좋지못한 사례 ==> 원본을 변경시킴
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { __typename, ...newBasket } = basket; // 안전한 사례  ==> ...rest 사용해서

    baskets.push(basket);

    // 3. 추가된 장바구니로 변경하기
    localStorage.setItem("baskets", JSON.stringify(baskets)); // 로컬스토리지는 문자열만 담을 수있음 그래서 JSON으로 변환해서 넣어 줘야함
  };

  // 만약 장바구니 페이지를 가져오기를 만들고 싶다면
  // localStorage.getItem( )  ===> useEffct 를 사용해서 가져오기 : 그냥가져오면 렌더링 오류남

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </>
  );
}
