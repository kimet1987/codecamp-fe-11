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
    background: url(/back_btn.svg) no-repeat;
    background-size: contain;
    border: none;
    text-indent: -9999px;
    cursor: pointer;
`;
export const Wrapper = styled.form`
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    background-color: rgba(209, 191, 191, 0.3);
    box-shadow: 0px 4px 20px rgba(212, 208, 208, 0.2);
    border-radius: 30px;
    padding: 30px 40px;
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
    ul {
        display: flex;
        justify-content: center;
        gap: 0 25px;
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px solid #b59f2b96;
        li {
            list-style: none;
            color: white;
            cursor: pointer;
        }
    }
`;

export const Input_Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    padding-top: 20px;
`;

export const State = styled.div`
    padding: 10px 0 0 10px;
    input {
        display: none;
    }
    label {
        position: relative;
        padding-left: 36px;
        position: relative;
        line-height: 24px;
        color: white;
        ::after {
            content: "";
            position: absolute;
            left: 0;
            top: -3px;
            width: 24px;
            height: 24px;
            background: url(/chk.svg) no-repeat;
            background-size: contain;
        }
        ::before {
            content: "";
            position: absolute;
            left: 6px;
            top: 3px;
            width: 12px;
            height: 10.5px;
            background: url(/vChk.svg) no-repeat;
            background-size: contain;
        }
    }
`;
