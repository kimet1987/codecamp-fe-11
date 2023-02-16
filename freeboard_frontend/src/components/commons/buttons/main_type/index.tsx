import styled from "@emotion/styled";
const Main_btn = styled.button<Pick<IMainType, "isActive">>`
    width: 170px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    line-height: 60px;
    background-color: ${(props) => (props.isActive ? "#ffd600" : "#BDBDBD")};
`;

interface IMainType {
    type: "submit" | "button";
    title: string;
    isActive: boolean;
}

export default function Main_type(props: IMainType) {
    return (
        <Main_btn isActive={props.isActive} type={props.type}>
            {props.title}
        </Main_btn>
    );
}
