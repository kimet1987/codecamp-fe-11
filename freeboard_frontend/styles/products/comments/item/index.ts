import styled from "@emotion/styled";

export const CommentItem = styled.li`
    display: flex;
    position: relative;
    gap: 0 20px;
    padding: 10px 20px;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
`;
export const User_Img = styled.div`
    width: 30px;
    height: 30px;
    img {
        width: 100%;
    }
`;
export const Content = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
        list-style: none;
    }
    li:nth-of-type(1) {
        font-size: 18px;
        font-weight: 500;
    }
    li:nth-of-type(2) {
        font-size: 16px;
        font-weight: 500;
    }
    li:nth-of-type(3) {
        font-size: 14px;
        color: #bdbdbd;
    }
`;
export const Btn_wrap = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    gap: 0 5px;
    button {
        width: 24px;
        height: 24px;
        background-size: contain;
        border: none;
        cursor: pointer;
    }
    .reply {
        background: url(/comment/answer.svg) no-repeat;
    }
    .edit {
        background: url(/comment/edit_btn.svg) no-repeat;
    }
    .del {
        background: url(/comment/del_btn.svg) no-repeat;
    }
`;
