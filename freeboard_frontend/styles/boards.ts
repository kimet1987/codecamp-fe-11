import styled from "@emotion/styled";

export const Search_bar = styled.div`
    width: 40%;
    margin: 30px auto 0;
    border: 1px solid #bdbdbd;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    input {
        width: 100%;
        padding: 20px 15px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 10px;
        border: none;
        :focus {
            padding: 18px 15px;
            border: 2px solid #333;
        }
        ::placeholder {
            color: #e0e0e0;
        }
    }
`;

export const List_wrapper = styled.div`
    width: 1200px;
    margin: 50px auto 300px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 35px 55px;
    border-radius: 0 0 30px 0;
    background-color: #f2f2f2;
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
        cursor: pointer;
        display: flex;
        padding: 14px 0;
        border-top: 1px solid #bdbdbd;
        list-style: none;
    }
    span {
        font-size: 16px;
        color: #4f4f4f;
        text-align: center;
        pointer-events: none;
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
    cursor: pointer;
    transition: 0.5s;
    i {
        position: absolute;
        top: 14px;
        left: 16px;
        width: 24px;
        height: 24px;
        background: url(/pen.svg) no-repeat;
        background-size: contain;
    }
    :hover {
        background-color: #b87474;
        color: #f2f2f2;
    }
`;
