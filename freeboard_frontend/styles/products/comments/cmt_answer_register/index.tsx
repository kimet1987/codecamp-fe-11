import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    padding-left: 56px;
    display: flex;
    justify-content: space-between;
    > span {
        position: absolute;
        left: 110px;
        top: 2px;
        line-height: 36px;
        font-size: 20px;
        font-weight: 500;
    }
`;
export const Contents_wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 20%);
    overflow: hidden;
    margin-top: 40px;
`;
export const User = styled.div`
    display: flex;
    gap: 0 10px;
    img {
        width: 36px;
        height: 36px;
    }
`;

export const TextArea = styled.textarea`
    width: 90%;
    border: none;
    padding: 20px;
    height: 100px;
    resize: none;
    font-size: 18px;
    ::placeholder {
        color: #bdbdbd;
    }
`;
export const Cmt_bottom = styled.div`
    position: relative;
    width: 100%;
    padding: 15px 20px;
    font-size: 14px;
    border-top: 1px solid #bdbdbd;
    span {
        color: #bdbdbd;
    }
`;
export const Btn = styled.button`
    position: absolute;
    top: -1px;
    right: 0;
    width: 100px;
    height: 48px;
    border: navajowhite;
    background-color: black;
    color: white;
    font-size: 16px;
    font-weight: 500;
`;
