import styled from "@emotion/styled";

export const Faq_wrapper = styled.div`
    background: white;
    width: 640px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    position: relative;
    width: 100%;
    padding: 143px 48px 51px 48px;
    border-bottom: 1px solid #cacaca;
`;
export const Search_icon = styled.img`
    position: absolute;
    top: 79px;
    right: 48px;
    width: 32px;
    height: 32px;
    object-fit: contain;
`;
export const Title_wrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 36px 0 43px;
    h2 {
        font-size: 40px;
        font-weight: 700;
        color: black;
    }
    img {
        width: 60px;
        height: 60px;
        object-fit: contain;
        margin-right: 19px;
    }
    div {
        display: flex;
    }
    span {
        font-size: 24px;
        font-weight: 700;
        line-height: 60px;
        position: relative;
        color: black;
        padding-right: 24px;
    }
    span:after {
        content: "";
        position: absolute;
        top: 22px;
        right: 1px;
        width: 12px;
        height: 12px;
        background: url(/arrow2.svg) no-repeat;
        background-size: contain;
    }
`;
export const Tab_menu = styled.ul`
    display: flex;
    gap: 0 50px;
    li {
        position: relative;
        font-size: 30px;
        font-weight: 700;
        color: #cacaca;
        list-style: none;
    }
    li.active {
        color: #ff1b6d;
    }
    li.active:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        border-bottom: 2px solid #ff1b6d;
    }
`;
export const Faq_list = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 50px 0;
    padding: 21px 40px 54px;
    width: 100%;
    li {
        display: flex;
        justify-content: space-between;
        position: relative;
    }
`;
export const Ask = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    span {
        color: #adadad;
        font-size: 18px;
    }
    p {
        color: black;
        font-size: 24px;
    }
`;
export const Arrow_icon = styled.span`
    position: absolute;
    top: 25px;
    right: 25px;
    background: url(/arrow.svg) no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
`;
export const Gnb = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dcdcdc;
    padding: 14px 74px;
    li {
        width: 81px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 9px 0;
        img {
            width: 40px;
        }
        span {
            font-size: 16px;
            color: #adadad;
            text-align: center;
        }
    }
`;
