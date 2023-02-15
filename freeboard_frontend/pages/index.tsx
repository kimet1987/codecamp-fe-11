import { useRouter } from "next/router";
import Banner from "../src/components/units/Banner";
import Header from "../src/components/units/Header";
import Navi from "../src/components/units/Navi";
import JoinPage from "./join";
import LoginPage from "./login";

interface ILayout {
    children: JSX.Element;
}
export default function Layout(props: ILayout): JSX.Element {
    const router = useRouter();
    const LOGIN = ["/login"];
    const JOIN = ["/join"];
    const isLogin = LOGIN.includes(router.asPath);
    const isJoin = JOIN.includes(router.asPath);

    return (
        <>
            {isJoin ? (
                <JoinPage />
            ) : isLogin ? (
                <LoginPage />
            ) : (
                <>
                    <Header />
                    <Banner />
                    <Navi />
                    <div>{props.children}</div>
                </>
            )}
        </>
    );
}
