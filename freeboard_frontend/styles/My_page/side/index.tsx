import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 180px;
    border-right: 1px solid #bdbdbd;
    padding-top: 80px;

    h3 {
        font-size: 24px;
        font-weight: 700;
    }
`;
export const User_wrap = styled.div`
    margin: 40px 0 70px;
    display: flex;
    flex-direction: column;
    img {
        width: 98px;
        height: 98px;
        overflow: hidden;
        object-fit: contain;
    }
    .name {
        margin: 20px 16px 10px;
        font-size: 24px;
        font-weight: 700;
    }
    .point {
        position: relative;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        padding-left: 30px;
        ::after {
            content: "";
            position: absolute;
            top: -1px;
            left: 0;
            width: 24px;
            height: 24px;
            background: url(/saving.svg) no-repeat;
            background-size: contain;
        }
    }
`;
export const User_detail = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 34px 0;
    li {
        list-style: none;
        padding-left: 30px;
        font-size: 18px;
        line-height: 24px;
        color: #828282;
        position: relative;
        ::after {
            content: "";
            position: absolute;
            top: -1px;
            left: 0;
            width: 24px;
            height: 24px;
        }
    }
    li:nth-of-type(1) {
        ::after {
            background: url(/cart_gray.svg) no-repeat;
            background-size: contain;
        }
    }
    li:nth-of-type(2) {
        ::after {
            background: url(/saving_gray.svg) no-repeat;
            background-size: contain;
        }
    }
    li:nth-of-type(3) {
        ::after {
            background: url(/comment/user_img.svg) no-repeat;
            background-size: contain;
        }
    }
`;
