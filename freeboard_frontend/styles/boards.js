import styled from "@emotion/styled";

export const List_wrapper = styled.div`
    width: 100%;
`;
export const Header = styled.div`
    display: flex;
    padding: 11px 0 14px;
    border-top: 1px solid black;
    span {
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }
    span:nth-of-type(1) {
        width: 15%;
    }
    span:nth-of-type(2) {
        width: 55%;
    }
    span:nth-of-type(3) {
        width: 15%;
    }
    span:nth-of-type(4) {
        width: 15%;
    }
`;

export const Contents = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    li {
        display: flex;
        padding: 14px 0;
        border-top: 1px solid #bdbdbd;
        list-style: none;
    }
    span {
        font-size: 16px;
        color: #4f4f4f;
        text-align: center;
    }
    span:nth-of-type(1) {
        width: 15%;
    }
    span:nth-of-type(2) {
        width: 55%;
    }
    span:nth-of-type(3) {
        width: 15%;
    }
    span:nth-of-type(4) {
        width: 15%;
    }
`;

export const List_footer = styled.div`
    position: relative;
    padding-top: 40px;
`;
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
        list-style: none;
        font-size: 16px;
        color: #4f4f4f;
        line-height: 26px;
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
`;
export const Board_register_btn = styled.button`
    position: absolute;
    top: 24px;
    right: 0;
    background-color: transparent;
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    line-height: 50px;
    font-weight: 500;
    padding: 0 16px 0 48px;
    i {
        position: absolute;
        top: 14px;
        left: 16px;
        width: 24px;
        height: 24px;
        background: url(/pen.svg) no-repeat;
        background-size: contain;
    }
`;
