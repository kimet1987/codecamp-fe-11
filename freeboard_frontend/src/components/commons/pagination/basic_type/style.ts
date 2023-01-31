import styled from "@emotion/styled";

export const Pager = styled.div`
    display: flex;
    justify-content: center;
    gap: 0 20px;
    .next {
        background-image: url(/next_btn.svg);
    }
    .prev {
        background-image: url(/prev_btn.svg);
    }
    ul {
        display: flex;
        gap: 0 20px;
        margin: 0;
        padding: 0;
    }
    li {
        width: 20px;
        text-align: center;
        list-style: none;
        font-size: 16px;
        color: #4f4f4f;
        line-height: 26px;
        cursor: pointer;
    }
    li.active {
        color: #ffd600;
        font-weight: 700;
        text-decoration: underline;
    }
`;
export const Pager_btn = styled.button`
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    text-indent: -9999px;
    background-color: transparent;
    cursor: pointer;
`;
