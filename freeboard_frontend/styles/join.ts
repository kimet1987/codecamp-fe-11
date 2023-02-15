import styled from "@emotion/styled";

export const Background = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: url(/cover.jpeg) no-repeat;
    background-size: cover;
`;
export const Back_btn = styled.button`
    position: absolute;
    top: 80px;
    right: 80px;
    width: 30px;
    height: 30px;
    background: url(/close_btn.svg) no-repeat;
    background-size: contain;
    border: none;
    text-indent: -9999px;
    cursor: pointer;
`;
export const Wrapper = styled.form`
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    background-color: rgba(209, 191, 191, 0.3);
    box-shadow: 0px 4px 20px rgba(212, 208, 208, 0.2);
    border-radius: 30px;
    padding: 30px 40px 50px;
    h2 {
        font-size: 40px;
        font-weight: 700;
        color: #b59f2b;
        text-align: center;
        margin-bottom: 30px;
    }
`;
export const Input_Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px 0;
`;
export const Input = styled.div`
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
export const Join_btn = styled.button`
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    line-height: 60px;
    color: white;
    background-color: #b59f2b96;
    margin-top: 40px;
`;
export const Modal = styled.div`
    .ant-modal-footer {
        display: none;
    }
`;
export const Modal_wrap = styled.div`
    h2 {
        font-size: 40px;
        font-weight: 700;
        color: burlywood;
        text-align: center;
    }
    em {
        color: #b59f2b;
        font-style: normal;
    }
`;
