import styled from "@emotion/styled";
export const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    color: black;
`;
export const Header = styled.div`
    width: 100%;
    display: flex;
    background-color: #e0e0e0;
    padding: 10px 0;
    text-align: center;
    border-top: 1px solid #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
    input {
        width: 15%;
    }
    span:nth-child(2) {
        width: 20%;
    }
    span:nth-child(3) {
        width: 35%;
    }
    span:nth-child(4) {
        width: 20%;
    }
`;
export const Contents = styled.ul`
    display: flex;
    flex-direction: column;
`;
export const Notice = styled.li`
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #bdbdbd;
    text-align: center;
    input {
        width: 15%;
    }
    span:nth-child(2) {
        width: 20%;
    }
    span:nth-child(3) {
        width: 35%;
    }
    span:nth-child(4) {
        width: 20%;
    }
`;
export const Del_btn = styled.button`
    border-radius: 20px;
    line-height: 36px;
    font-size: 20px;
    font-weight: 500;
    background-color: tomato;
    margin: 20px;
    border: none;
    padding: 0 20px;
    color: white;
`;
