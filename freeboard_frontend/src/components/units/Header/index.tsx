import { useRouter } from "next/router";
import * as H from "../../../../styles/header";

export default function Header(): JSX.Element {
    const router = useRouter();
    const onJoin = () => {
        router.push("/join");
    };
    const onLogin = () => {
        router.push("/login");
    };
    return (
        <H.Wrapper>
            <h2>
                <em>Art</em> Center
            </h2>
            <H.btn_wrap>
                <button onClick={onLogin}>로그인</button>
                <button className="join_btn" onClick={onJoin}>
                    회원가입
                </button>
            </H.btn_wrap>
        </H.Wrapper>
    );
}
