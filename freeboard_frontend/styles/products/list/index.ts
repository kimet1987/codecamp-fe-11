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
export const List_wrap = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    > li {
        list-style: none;
        width: calc(25% - 15px);
        border: 1px solid #bdbdbd;
        border-radius: 0 0 15px 0;
        padding: 14px;
        cursor: pointer;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        ul {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            li {
                list-style: none;
            }
            li:nth-of-type(1) {
                font-size: 24px;
                font-weight: 500;
            }
            li:nth-of-type(2) {
                font-size: 18px;
                color: #333;
            }
            li:nth-of-type(3) {
                font-size: 16px;
                color: #eee;
            }
            li:nth-of-type(4) {
                display: flex;
                width: 100%;
                gap: 0 20px;
            }
        }
    }
`;
export const Img_wrap = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        object-fit: contain;
    }
`;
export const Seller = styled.button`
    display: flex;
    gap: 0 8px;
    font-size: 18px;
    line-height: 24px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    img {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }
`;
export const Like = styled.button`
    display: flex;
    gap: 0 8px;
    font-size: 18px;
    line-height: 24px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    img {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }
`;
export const price = styled.div`
    display: flex;
    gap: 0 5px;
    font-size: 24px;
    padding: 10px 0;
    span:nth-of-type(1) {
        font-weight: 700;
    }
    span:nth-of-type(2) {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
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
