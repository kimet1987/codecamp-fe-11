import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from ".";
import { globalStyles } from "../src/commons/styles/globalStyle";
import ApolloSetting from "../src/components/commons/apollo";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ApolloSetting>
                <>
                    <Global styles={globalStyles} />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </>
            </ApolloSetting>
        </RecoilRoot>
    );
}
