// import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component }: AppProps): JSX.Element {
    const client = new ApolloClient({
        uri: "http://backend-example.codebo/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.mdotcamp.co.kr/graphql",
        cache: new InMemoryCache(), // 컴퓨서의 메모리에다가 백엔드에서 받아온 데이터를 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
    });
    return (
        <ApolloProvider client={client}>
            <Component />;
        </ApolloProvider>
    );
}
