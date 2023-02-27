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
import { getAccessToken } from "../../commons/libraries/getAccessToken";
import {
    accessTokenState,
    restoreAccessTokenLoadble,
} from "../../commons/stores";
import { onError } from "@apollo/client/link/error";

const GLOBAL_STATE = new InMemoryCache(); // 스테이스가 최기화 안하는 법

interface IApolloSettingProps {
    children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const global_Token = useRecoilValueLoadable(restoreAccessTokenLoadble);

    useEffect(() => {
        global_Token.toPromise().then((newAccessToken) => {
            setAccessToken(newAccessToken ?? "");
        });
    }, []);

    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
        if (typeof graphQLErrors !== "undefined") {
            for (const err of graphQLErrors) {
                if (err.extensions.code === "UNAUTHENTICATED") {
                    return fromPromise(
                        getAccessToken().then((newAccessToken) => {
                            setAccessToken(newAccessToken ?? "");

                            if (typeof newAccessToken !== "string") return;

                            operation.setContext({
                                Headers: {
                                    ...operation.getContext().headers,
                                    Authorization: `Bearer ${newAccessToken}`,
                                },
                            });
                        })
                    ).flatMap(() => forward(operation));
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
