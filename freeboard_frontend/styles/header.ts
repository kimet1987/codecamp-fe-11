import styled from "@emotion/styled";
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 160px;
    padding: 0 360px;
    h2 {
        font-size: 40px;
        font-weight: 700;
    }
    em {
        color: #ffd600;
        font-style: normal;
    }
`;
export const btn_wrap = styled.div`
    display: flex;
    button {
        padding: 0 16px;
        border: none;
        font-size: 16px;
        line-height: 44px;
        font-weight: 700;
        background-color: transparent;
        cursor: pointer;
    }
    .join_btn {
        background-color: #ffd600;
        border-radius: 10px;
    }
`;
