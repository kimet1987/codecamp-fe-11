import * as N from "../../../../styles/navi";

export default function Navi(): JSX.Element {
    return (
        <N.Wrapper>
            <ul>
                <li className="active">자유게시판</li>
                <li>중고마켓</li>
                <li>마이페이지</li>
            </ul>
        </N.Wrapper>
    );
}
