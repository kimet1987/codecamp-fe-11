import { gql, useApolloClient } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage(): JSX.Element {
  // 1. 페이지 접속하면 자동으로 data에 받아지고(data는 글로벌스테이트에 저장) 리렌더링
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. 버튼 클릭시 data에 받아지고(글로벌스테이트에 저장) 리렌더링
  // const [나의함수, {data}] = useLazyQuery(FETCH_USER_LOGGED_IN)

  // 3. axios 처럼 사용 하는법
  // const client = useApolloClient()
  // client.query({}) <==> axios.get()

  const client = useApolloClient();
  const onBtn = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={wrapAsync(onBtn)}>클릭하세요</button>
    </>
  );
}
