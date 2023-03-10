import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    gap: 40px 0;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
export const Sale_wrap = styled.div`
    display: flex;
    width: 180px;
    align-items: center;
    justify-content: space-between;
    button {
        font-size: 18px;
        height: 30px;
        border: none;
        background-color: transparent;
        color: #bdbdbd;
    }
    .active {
        color: black;
        font-weight: 500;
        border-bottom: 2px solid #ffd600;
    }
`;
export const Filter_wrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 72%;
`;
export const Search_wrap = styled.div`
    position: relative;
    width: 280px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    input {
        width: 100%;
        background-color: transparent;
        border: none;
        line-height: 50px;
        padding: 2px 20px;
    }
    ::after {
        content: "";
        position: absolute;
        top: 14px;
        right: 16px;
        width: 24px;
        height: 24px;
        background: url(/srh_icon.svg) no-repeat;
        background-size: contain;
    }
`;
export const Date_wrap = styled.div`
    width: calc(100% - 320px);
    display: flex;
    justify-content: space-between;
    button {
        width: 100px;
        border: 1px solid black;
        color: white;
        font-size: 18px;
        line-height: 50px;
        padding: 0 20px;
        background-color: black;
    }
`;
export const Input_wrap = styled.div`
    width: calc(100% - 120px);
    display: flex;
    justify-content: space-between;
    input {
        width: 49%;
        font-size: 18px;
        line-height: 50px;
        padding: 0 16px;
        border-radius: 8px;
    }
`;

export const List_wrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Register_btn = styled.button`
    width: 200px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #bdbdbd;
    line-height: 54px;
    border-radius: 0 0 10px 0;
    font-size: 20px;
    align-self: flex-end;
`;
