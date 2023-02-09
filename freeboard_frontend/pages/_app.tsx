// import "../styles/globals.css";
import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    InMemoryCache,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import Layout from ".";
import { globalStyles } from "../src/commons/styles/globalStyle";

export default function App({ Component }: AppProps) {
    const uploadLink: any = createUploadLink({
        uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    });
    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
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
