import styled from "@emotion/styled";
import { MouseEvent } from "react";
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
    id?: string;
    type: "submit" | "button";
    title: string;
    isActive: boolean;
    onFunc?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Main_type(props: IMainType) {
    return (
        <Main_btn
            id={props.id}
            isActive={props.isActive}
            type={props.type}
            onClick={props.onFunc}
        >
            {props.title}
        </Main_btn>
    );
}
