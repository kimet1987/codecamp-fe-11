import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 640px;
    height: 1138px;
    background: url(/load_bg.svg) no-repeat;
    background-size: contain;
    padding: 228px 40px 83px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 41px 0;
    img {
        width: 66px;
        object-fit: contain;
        position: relative;
        text-align: center;
        z-index: 1;
    }
    h2 {
        font-size: 60px;
        font-weight: 700;
        color: white;
        text-align: center;
        position: relative;
    }
    h2:after {
        content: "";
        position: absolute;
        top: -50px;
        left: 68px;
        width: 72px;
        height: 24px;
        background: #9d9d9d;
        border-radius: 50px;
    }
`;
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    padding: 144px 0 38px;
    .last {
        margin: 66px 0 51px;
    }
`;
export const Input_wrap = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-bottom: 7px;
    border-bottom: 1px solid #7d7d7d;
    input {
        color: white;
        font-size: 24px;
        background-color: inherit;
        border: none;
        width: calc(100% - 20px);
    }
    span {
        position: relative;
        width: 20px;
        height: 20px;
        background: url(/Xicon.svg) no-repeat;
        background-size: contain;
    }
    span::after {
        content: "X";
        display: block;
        width: 20px;
        line-height: 23px;
        text-align: center;
    }
    p {
        position: absolute;
        left: 0;
        bottom: -27px;
        font-size: 16px;
        color: #ff1b6d;
    }
`;

export const Signin_btn = styled.div`
    width: 540px;
    line-height: 76px;
    font-size: 26px;
    font-weight: 700;
    color: white;
    background: rgba(255, 27, 109, 0.6);
    border-radius: 38px;
    text-align: center;
    cursor: pointer;
`;
export const Sub_list = styled.div`
    display: flex;
    justify-content: center;
    gap: 0 63px;
    li {
        position: relative;
        font-size: 20px;
        color: white;
        font-weight: 700;
        list-style: none;
    }
    li:last-child:after {
        content: none;
    }
    li:after {
        content: "";
        position: absolute;
        top: 1px;
        right: -31px;
        height: 21px;
        border-right: 1px solid #9f9f9f;
    }
`;
export const Kakao_btn = styled.div`
    cursor: pointer;
    position: relative;
    width: 540px;
    line-height: 76px;
    font-size: 26px;
    color: #ffe100;
    font-weight: 700;
    border: 2px solid rgba(250, 225, 0, 0.6);
    border-radius: 38px;
    text-align: center;
    padding-left: 64px;
    margin-top: 58px;
    ::after {
        content: "";
        position: absolute;
        left: 140px;
        top: 22px;
        width: 33px;
        height: 30px;
        background: url(/kako.svg) no-repeat;
        background-size: contain;
    }
`;
