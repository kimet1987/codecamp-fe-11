import * as H from "../../../../styles/header";

export default function Header(): JSX.Element {
    return (
        <H.Wrapper>
            <h2>
                <em>&#123; &#125;</em> code.camp
            </h2>
            <H.btn_wrap>
                <button>로그인</button>
                <button className="join_btn">회원가입</button>
            </H.btn_wrap>
        </H.Wrapper>
    );
}
