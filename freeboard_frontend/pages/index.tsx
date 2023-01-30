import { useRouter } from "next/router";
import Banner from "../src/components/units/Banner";
import Header from "../src/components/units/Header";
import Navi from "../src/components/units/Navi";
import RegisterPage from "./boards/register";

interface ILayout {
    children: JSX.Element;
}
export default function Layout(props: ILayout): JSX.Element {
    const router = useRouter();
    console.log(router.asPath);
    const PAGE_CHANGE = [
        "/boards",
        `/boards/${router.query.board}`,
        `/boards/${router.query.board}/edit`,
    ];
    const isPageChange = PAGE_CHANGE.includes(router.asPath);
    return (
        <>
            <Header />
            <Banner />
            <Navi />
            {isPageChange ? <div>{props.children}</div> : <RegisterPage />}
            {/* <div>{props.children}</div> */}
        </>
    );
}
