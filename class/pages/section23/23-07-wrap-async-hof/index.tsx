import { useMutation, gql } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "철수", title: "제목입니다", contents: "내용입니다") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const Submit = async (): Promise<void> => {
    const result = await 나의함수();
    console.log(result);
  };

  // 한 줄일때 괄호() 필요 없음
  return <button onClick={wrapAsync(Submit)}>GRAPHQL - API 요청하기</button>;
}
