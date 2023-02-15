import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "swiper/css/bundle";
import { globalStyles } from "../src/commons/styles/globalStyle";
import ApolloSetting from "../src/components/apollo";
import Layout from "./14";

export default function App({ Component }: AppProps): JSX.Element {
    return (
        <RecoilRoot>
            <ApolloSetting>
                <>
                    <Global styles={globalStyles} />
                    <Layout>
                        <Component />
                    </Layout>
                </>
            </ApolloSetting>
        </RecoilRoot>
    );
}
