import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 60px 100px 100px;
    h2 {
        font-size: 36px;
        font-weight: 700;
        color: black;
        padding-bottom: 80px;
    }
`;
export const Contents = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;
export const WriteWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const Writer = styled.div`
    width: calc(50% - 12px);
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    position: relative;
    label {
        font-size: 16px;
        font-weight: 500;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: black;
    }
    label:after {
        content: "*";
        color: #ffd600;
        margin-left: 5px;
        text-shadow: none;
    }
    input {
        padding: 13px 16px;
        border: 1px solid #c4c4c4;
        background: white;
        line-height: 24px;
    }
    input::placeholder {
        color: #c4c4c4;
    }
    p {
        position: absolute;
        bottom: -30px;
        left: 0;
        font-size: 16px;
        font-weight: 500;
        color: #ff1b6d;
        margin: 0;
    }
`;
export const Pwd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    width: calc(50% - 12px);
    position: relative;
    label {
        font-size: 16px;
        font-weight: 500;
        color: black;
    }
    input {
        padding: 13px 16px;
        border: 1px solid #c4c4c4;
        background: white;
        line-height: 24px;
    }
    input::placeholder {
        color: #c4c4c4;
    }
    p {
        position: absolute;
        bottom: -30px;
        left: 0;
        font-size: 16px;
        font-weight: 500;
        color: #ff1b6d;
        margin: 0;
    }
`;
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    width: 100%;
    padding: 40px 0;
    position: relative;
    label {
        font-size: 16px;
        font-weight: 500;
        color: black;
    }
    input {
        padding: 13px 16px;
        border: 1px solid #c4c4c4;
        background: white;
        line-height: 24px;
    }
    input::placeholder {
        color: #c4c4c4;
    }
    p {
        position: absolute;
        bottom: 10px;
        left: 0;
        font-size: 16px;
        font-weight: 500;
        color: #ff1b6d;
        margin: 0;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    width: 100%;
    position: relative;
    label {
        font-size: 16px;
        font-weight: 500;
        color: black;
    }
    textarea {
        width: 100%;
        height: 480px;
        resize: none;
        border: 1px solid #c4c4c4;
        background: white;
        padding: 14px 16px;
    }
    textarea::placeholder {
        color: #c4c4c4;
    }
    p {
        position: absolute;
        top: 0;
        left: 50px;
        font-size: 16px;
        font-weight: 500;
        color: #ff1b6d;
        margin: 0;
    }
`;
export const Address = styled.div`
    width: 100%;
    padding: 16px 0 37px;
    label {
        font-size: 16px;
        font-weight: 500;
        color: black;
    }
    > input {
        width: 100%;
        padding: 13px 16px;
        border: 1px solid #c4c4c4;
        background: white;
        line-height: 24px;
    }
    > input:last-child {
        margin-top: 30px;
    }
`;
export const Zip_code = styled.div`
    display: flex;
    gap: 0 16px;
    padding: 16px 0;
    input {
        padding: 13px 16px;
        border: 1px solid #c4c4c4;
        background: white;
        line-height: 24px;
        width: 77px;
        color: #c4c4c4;
        text-align: center;
    }
    button {
        padding: 14px 16px;
        border: none;
        background: black;
        color: white;
        font-weight: 500;
    }
`;
export const Youtube = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px 0;
    label {
        font-size: 16px;
        font-weight: 500;
        color: black;
    }
    input {
        padding: 13px 16px;
        border: 1px solid #c4c4c4;
        background: white;
        color: #c4c4c4;
    }
    input::placeholder {
        color: #c4c4c4;
    }
`;
export const Attach_pic = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    color: black;
    padding: 40px 0;
    h3 {
        font-size: 16px;
        font-weight: 500;
    }
`;
export const Btn_wrap = styled.div`
    display: flex;
    gap: 0 24px;
`;
export const Attach_btn = styled.div`
    width: 78px;
    height: 78px;
    background: #bdbdbd;
    label {
        display: block;
        box-sizing: border-box;
        padding: 23px 18px 18px;
        width: 100%;
        height: 100%;
        font-size: 12px;
        color: #4f4f4f;
        position: relative;
        line-height: 54px;
        text-align: center;
        cursor: pointer;
    }
    input {
        width: 1px;
        height: 1px;
        opacity: 0;
    }
    label::after {
        content: "";
        position: absolute;
        top: 22px;
        left: 50%;
        transform: translateX(-50%);
        width: 14px;
        height: 14px;
        background: url(/plus.svg);
    }
`;
export const Main_set = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    color: black;
    h3 {
        font-size: 16px;
        font-weight: 500;
    }
`;
export const Radio_wrap = styled.div`
    display: flex;
    gap: 0 20px;
`;
export const Radio = styled.div`
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
export const Register_btn = styled.div`
    cursor: pointer;
    margin: 80px auto 0;
    text-align: center;
    padding: 0 60px;
    width: 179px;
    line-height: 52px;
    font-size: 16px;
    font-weight: 500;
    color: black;
    background: #ffd600;
`;
