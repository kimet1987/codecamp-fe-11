import styled from "@emotion/styled";

const Radio = styled.div`
    display: flex;
    align-items: center;
    input {
        width: 1px;
        height: 1px;
        opacity: 0;
    }
    label {
        position: relative;
        font-size: 16px;
        font-weight: 500;
        padding-left: 28px;
        line-height: 22px;
    }
    label::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        border: 1px solid black;
        background: white;
        border-radius: 50%;
    }
    input[type="radio"]:checked + label::after {
        border-color: #ffd600;
    }
    input[type="radio"]:checked + label::before {
        content: "";
        width: 12px;
        height: 12px;
        background: #ffd600;
        position: absolute;
        top: 18%;
        left: 7%;
        border-radius: 50%;
        z-index: 1;
    }
`;
interface IMainSetRadio {
    type: "radio";
    name: string;
    id: string;
    title: string;
}

export default function MainSetRadio(props: IMainSetRadio) {
    return (
        <Radio>
            <input type={props.type} name={props.name} id={props.id} />
            <label htmlFor={props.id}>{props.title}</label>
        </Radio>
    );
}
