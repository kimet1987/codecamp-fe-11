import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    InMemoryCache,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import "swiper/css/bundle";
import { globalStyles } from "../src/commons/styles/globalStyle";
import Layout from "./14";

export default function App({ Component }: AppProps): JSX.Element {
    const uploadLink = createUploadLink({
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
