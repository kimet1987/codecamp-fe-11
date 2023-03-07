import * as M from "../../../../../styles/My_page/side/index";

export default function MyPageSide() {
    return (
        <M.Wrapper>
            <h3>MyPage</h3>
            <M.User_wrap>
                <img src="/comment/user_img.svg" />
                <span className="name">김병수</span>
                <span className="point">100,000</span>
            </M.User_wrap>
            <M.User_detail>
                <li>내 장터</li>
                <li>내 포인트</li>
                <li>내 프로필</li>
            </M.User_detail>
        </M.Wrapper>
    );
}
