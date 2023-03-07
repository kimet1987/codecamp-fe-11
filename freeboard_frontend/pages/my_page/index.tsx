import styled from "@emotion/styled";
import MyPageList from "../../src/components/units/My_page/list";
import MyPageSide from "../../src/components/units/My_page/side";
const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 0 40px;
`;

export default function MyPage() {
    return (
        <Wrapper>
            <MyPageSide />
            <MyPageList />
        </Wrapper>
    );
}
