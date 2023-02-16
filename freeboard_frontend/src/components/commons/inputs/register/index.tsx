import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

const Input = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    label {
        font-size: 20px;
        font-weight: 500;
        color: black;
    }
    input {
        width: 100%;
        border: 1px solid #bdbdbd;
        border-radius: 8px;
        padding: 20px 15px;
        font-size: 20px;
        font-weight: 500;
        color: #333;
        ::placeholder {
            color: #bdbdbd;
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

interface IInputRegister {
    type: "text" | "password";
    title: string;
    errMsg: string;
    placeholder: string;
    register: UseFormRegisterReturn;
}

export default function InputRegister(props: IInputRegister) {
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
