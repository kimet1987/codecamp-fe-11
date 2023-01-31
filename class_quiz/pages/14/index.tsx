import { useRouter } from "next/router";
import Banner from "../../src/Layout/Banner";
import Body from "../../src/Layout/Body";
import Footer from "../../src/Layout/Footer";
import Header from "../../src/Layout/Header";
import Navigation from "../../src/Layout/Navigation";
import Side from "../../src/Layout/Side";
import Navi from "./navi";

// const TEXT_CHANGE = ["/14/one", "/14/two", "/14/three"];
interface ILayout {
    children: JSX.Element;
}

export default function Layout(props: ILayout): JSX.Element {
    const router = useRouter();
    console.log(router.asPath);

    //const isTextChange = TEXT_CHANGE.includes(router.asPath);

    return (
        <>
            <Header />
            <Navi />
            <Banner />
            {/* <Navigation /> */}
            <div
                style={{
                    width: "100%",
                    height: "fit-content",
                    display: "flex",
                }}
            >
                <Side />
                {/* {isTextChange ? (
                    <div style={{ width: "70%" }}>{props.children}</div>
                ) : (
                    <div style={{ width: "70%", backgroundColor: "#333" }}>
                        바디영역 입니다
                    </div>
                )} */}
                <div
                    style={{ width: "70%", height: "500px", overflow: "auto" }}
                >
                    {props.children}
                </div>
            </div>
            <Footer />
        </>
    );
}
