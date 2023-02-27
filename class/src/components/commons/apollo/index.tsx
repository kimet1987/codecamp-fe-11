import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache(); // 스테이스가 최기화 안하는 법

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 1. 프리 렌더링 예제
  // if(process.browser){
  //   const result = localStorage.getItem("accessToken");
  //   setAccessToken(result ?? "");
  // } else {
  //   console.log("프론트 엔드 써버다")
  // }

  // 2. 프리 렌더링 예제
  // if (typeof window !== "undefined") {
  //   console.log("나는 브라우저다");
  // } else {
  //   console.log("나는 프론트엔드 서버다");
  // }

  // 3. 프리 렌더링 무시
  useEffect(() => {
    // 1. 기존 방식 (refreshToken 이전)
    // const result = localStorage.getItem("accessToken");

    // 2. 새로운 방식 (refreshToken 이후)
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐취
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토른 만료인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. 리프레쉬토큰으로 엑세스토큰 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              // 3. 재발급 받은 엑세스토큰으로 방금 실패한 쿼리 정보 수정하기
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`, // 3-2 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨서의 메모리에다가 백엔드에서 받아온 데이터를 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  });
  // prettier-ignore
  return (
		<ApolloProvider client={client}>
			{props.children}
		</ApolloProvider>
	)
}
