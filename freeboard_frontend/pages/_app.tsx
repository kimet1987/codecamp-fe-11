// import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Layout from ".";
import { globalStyles } from "../src/commons/styles/globalStyle";

export default function App({ Component }: AppProps) {
    const client = new ApolloClient({
        uri: "http://backend-practice.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <>
                <Global styles={globalStyles} />
                <Layout>
                    <Component />
                </Layout>
            </>
        </ApolloProvider>
    );
}
