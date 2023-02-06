import styled from "@emotion/styled";
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 200px;
    background-color: #e0e0e0;
    h2 {
        font-size: 40px;
        font-weight: 700;
        color: burlywood;
    }
    em {
        color: #b59f2b;
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
        background-color: #746e6e;
        border-radius: 10px;
        color: #e0e0e0;
    }
`;
