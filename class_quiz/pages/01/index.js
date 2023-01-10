import {
    Faq_wrapper,
    Header,
    Search_icon,
    Title_wrap,
    Tab_menu,
    Faq_list,
    Ask,
    Arrow_icon,
    Gnb,
} from "../../styles/01-index";

export default function FaqPage() {
    // 여기는 자바스크립트 쓰는법

    return (
        <Faq_wrapper>
            <Header>
                <Search_icon src="/search-bk.svg" />
                <Title_wrap>
                    <h2>마이</h2>
                    <div>
                        <img src="/profile-img.svg" />
                        <span>임정아</span>
                    </div>
                </Title_wrap>
                <Tab_menu>
                    <li>공지사항</li>
                    <li>이벤트</li>
                    <li className={"active"}>FAQ</li>
                    <li>Q&A</li>
                </Tab_menu>
            </Header>

            <Faq_list>
                <li>
                    <Ask>
                        <span>Q1. 01</span>
                        <p>리뷰 작성은 어떻게 하나요?</p>
                    </Ask>
                    <Arrow_icon></Arrow_icon>
                </li>
                <li>
                    <Ask>
                        <span>Q1. 02</span>
                        <p>리뷰 수정/삭제는 어떻게 하나요?</p>
                    </Ask>
                    <Arrow_icon></Arrow_icon>
                </li>
                <li>
                    <Ask>
                        <span>Q1. 03</span>
                        <p>아이디/비밀번호를 잊어버렸어요</p>
                    </Ask>
                    <Arrow_icon></Arrow_icon>
                </li>
                <li>
                    <Ask>
                        <span>Q1. 04</span>
                        <p>회원을 탈퇴하고 싶어요.</p>
                    </Ask>
                    <Arrow_icon></Arrow_icon>
                </li>
                <li>
                    <Ask>
                        <span>Q1. 05</span>
                        <p>출발지 설정은 어떻게 하나요?</p>
                    </Ask>
                    <Arrow_icon></Arrow_icon>
                </li>
                <li>
                    <Ask>
                        <span>Q1. 06</span>
                        <p>비밀번호를 변경하고 싶어요</p>
                    </Ask>
                    <Arrow_icon></Arrow_icon>
                </li>
            </Faq_list>
            <Gnb>
                <li>
                    <img src="/home.svg" />
                    <span>홈</span>
                </li>
                <li>
                    <img src="load.svg" />
                    <span>잇츠로드</span>
                </li>
                <li>
                    <img src="heart.svg" />
                    <span>마이찜</span>
                </li>
                <li>
                    <img src="info.svg" />
                    <span>마이</span>
                </li>
            </Gnb>
        </Faq_wrapper>
    );
}
