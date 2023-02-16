import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

const Input = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px 0;
    label {
        color: white;
    }
    input {
        width: 100%;
        background: rgba(200, 200, 200, 0.5);
        border-radius: 10px;
        padding: 20px 15px;
        border: none;
        font-size: 20px;
        font-weight: 500;
        color: #333;
        ::placeholder {
            color: #fff;
            font-weight: 300;
        }
    }
    p {
        position: absolute;
        bottom: -25px;
        left: 10px;
        color: #ff0000;
        font-size: 18px;
        font-weight: 500;
    }
`;

interface IInputJoin {
    type: "text" | "password";
    title: string;
    errMsg: string;
    placeholder: string;
    register: UseFormRegisterReturn;
}

export default function InputJoin(props: IInputJoin) {
    return (
        <Input>
            <label>{props.title}</label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                {...props.register}
            />
            <p>{props.errMsg}</p>
        </Input>
    );
}
