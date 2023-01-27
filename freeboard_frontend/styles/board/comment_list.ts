import styled from "@emotion/styled";

export const List_wrap = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    li {
        display: flex;
        gap: 0 16px;
        list-style: none;
        position: relative;
        padding: 9px 4px 20px;
    }
`;
export const User_Img = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;
export const Comment_content = styled.div`
    display: flex;
    flex-direction: column;
    p {
        font-size: 16px;
        color: #4f4f4f;
        padding: 4px 0 20px;
    }
`;
export const Comment_header = styled.div`
    display: flex;
    gap: 0 16px;
    span {
        font-size: 16px;
        font-weight: 500;
    }
`;
export const Star_wrap = styled.div`
    display: flex;
    gap: 0 2px;
    button {
        width: 20px;
        height: 20px;
        border: none;
        background: url(/comment/star.svg) no-repeat;
        background-size: contain;
        text-indent: -9999px;
    }
`;
export const Data = styled.div`
    font-size: 14px;
    color: #bdbdbd;
`;
export const Btn_wrap = styled.div`
    display: flex;
    gap: 0 8px;
    position: absolute;
    top: 0;
    right: 0;
    button {
        width: 24px;
        height: 24px;
        border: none;
        cursor: pointer;
        background-size: contain;
    }
    button:nth-of-type(1) {
        background: url(/comment/edit_btn.svg) no-repeat;
    }
    button:nth-of-type(2) {
        background: url(/comment/del_btn.svg) no-repeat;
    }
`;
