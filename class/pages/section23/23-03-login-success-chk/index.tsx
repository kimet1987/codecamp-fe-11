import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다.");
      void router.push("/section23/23-03-login-chk");
    }
  }, []);

  return <>{data?.fetchUserLoggedIn.name}님 환영 합니다!!</>;
}