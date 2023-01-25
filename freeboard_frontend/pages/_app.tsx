// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";

export default function App({ Component }: AppProps) {
    const client = new ApolloClient({
        uri: "http://backend-practice.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <Component />
        </ApolloProvider>
    );
}
