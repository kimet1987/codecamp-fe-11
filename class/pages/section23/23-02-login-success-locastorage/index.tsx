import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // const {data} = useQuery(FETCH_USER_LOGGED_IN, {
  // 	fetchPolicy:"network-only"
  // }) 네트워크에서 바로바로 받는 방법

  return <>{data?.fetchUserLoggedIn.name}님 환영 합니다!!</>;
}
