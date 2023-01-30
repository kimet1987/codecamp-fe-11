import styled from "@emotion/styled";
const Wrapper = styled.div`
    height: 100px;
    background-color: skyblue;
`;
interface IBody {
    children: JSX.Element;
}
export default function Body(props: IBody): JSX.Element {
    return <Wrapper>여기는 바디입니다</Wrapper>;
}
