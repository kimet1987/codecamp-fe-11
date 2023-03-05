import styled from "@emotion/styled";
import { IQuestionProps } from "../../../../pages/products/[product]/comments/cmt_register";

export const Wrapper = styled.div<Pick<IQuestionProps, "isEdit">>`
    width: 1200px;
    margin: 50px auto 20px;
    h3 {
        font-size: 24px;
        padding-bottom: 20px;
        text-shadow: 4px 2px 2px #bdbdbd;
    }
    display: ${(props) => (props.isEdit ? "flex" : "block")};
    justify-content: space-between;
`;
export const Contents_wrapper = styled.div<Pick<IQuestionProps, "isEdit">>`
    width: ${(props) => (props.isEdit ? "90%" : "100%")};
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 20%);
    overflow: hidden;
`;
export const User = styled.div`
    display: flex;
    gap: 0 10px;
    img {
        width: 36px;
        height: 36px;
    }
    span {
        line-height: 36px;
        font-size: 20px;
        font-weight: 500;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
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
export const Btn = styled.button<Pick<IQuestionProps, "isEdit">>`
    position: absolute;
    top: -1px;
    right: 0;
    width: 100px;
    height: 48px;
    border: navajowhite;
    background-color: ${(props) => (props.isEdit ? "black" : "#FFD600")};
    color: white;
    font-size: 16px;
    font-weight: 500;
`;
