import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import "swiper/css/bundle";
import { globalStyles } from "../src/commons/styles/globalStyle";
import Layout from "./14";

export default function App({ Component }: AppProps): JSX.Element {
    const client = new ApolloClient({
        uri: "http://backend-example.codebootcamp.co.kr/graphql",
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
