import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/stores";

const GLOBAL_STATE = new InMemoryCache(); // 스테이스가 최기화 안하는 법

interface IApolloSettingProps {
    children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    useEffect(() => {
        console.log("나는 브라우저다");
        const result = localStorage.getItem("accessToken");
        setAccessToken(result ?? "");
    }, []);

    const uploadLink = createUploadLink({
        uri: "http://backend-practice.codebootcamp.co.kr/graphql",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: GLOBAL_STATE, // 컴퓨서의 메모리에다가 백엔드에서 받아온 데이터를 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
    });
    // prettier-ignore
    return (
		<ApolloProvider client={client}>
			{props.children}
		</ApolloProvider>
	)
}
