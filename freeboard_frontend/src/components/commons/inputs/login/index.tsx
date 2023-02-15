import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

const InputLogin_wrap = styled.div`
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
        padding: 5px 0 0 10px;
        color: #ff0000;
        font-size: 18px;
        font-weight: 500;
    }
`;

interface IInputLogin {
    type: "text" | "password";
    errMsg: string;
    placeholder: string;
    register: UseFormRegisterReturn;
}

export default function InputLogin(props: IInputLogin) {
    return (
        <InputLogin_wrap>
            <input
                type={props.type}
                placeholder={props.placeholder}
                {...props.register}
            />
            <p>{props.errMsg}</p>
        </InputLogin_wrap>
    );
}
