import styled from "@emotion/styled";
export const Wrapper = styled.div`
    width: 1200px;
    padding: 40px 0;
    box-sizing: border-box;
    border-top: 1px solid #bdbdbd;
`;
export const Header = styled.h3`
    position: relative;
    padding: 0 0 40px 34px;
    font-size: 18px;
    font-weight: 500;
    ::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
        width: 20px;
        height: 20px;
        background: url(/comment/comment_icon.svg) no-repeat;
        background-size: contain;
    }
`;
export const Register_wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px 0;
`;
export const Register_top = styled.div`
    display: flex;
    gap: 0 24px;
    input {
        border: 1px solid #bdbdbd;
        padding: 17px 19px;
        font-weight: 500;
        ::placeholder {
            font-size: 16px;
            color: black;
        }
    }
`;
export const Star_wrap = styled.div`
    display: flex;
    gap: 0 2px;
    padding-top: 15px;
    button {
        width: 20px;
        height: 20px;
        border: none;
        background: url(/comment/star.svg) no-repeat;
        background-size: contain;
        text-indent: -9999px;
    }
`;
export const Register_bottom = styled.div`
    width: 100%;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    textarea {
        width: 100%;
        height: 68px;
        padding: 20px;
        resize: none;
        box-sizing: border-box;
        border: none;
    }
`;
export const Text_count = styled.div`
    position: relative;
    padding: 16px 20px;
    color: #bdbdbd;
    border-top: 1px solid #f2f2f2;
    span {
        font-size: 16px;
    }
    button {
        position: absolute;
        top: 0;
        right: 0;
        width: 91px;
        background-color: black;
        padding: 0 16px;
        font-size: 16px;
        color: white;
        line-height: 52px;
        border: none;
    }
`;
