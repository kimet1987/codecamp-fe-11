import styled from "@emotion/styled";

export const Wrapper = styled.form`
    margin: 50px auto 0;
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 60px 100px 100px;
    h2 {
        font-size: 36px;
        font-weight: 700;
        color: black;
        padding-bottom: 40px;
    }
`;
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #bdbdbd;
`;
export const User = styled.div`
    display: flex;
    gap: 0 17px;
    img {
        width: 47px;
    }
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    span {
        font-size: 24px;
        font-weight: 500;
        color: black;
        line-height: 36px;
    }
    dl {
        display: flex;
        color: #828282;
        margin: 0;
    }
    dd {
        margin-left: 5px;
    }
`;
export const Icon_wrap = styled.div`
    display: flex;
    gap: 0 20px;
    button {
        width: 32px;
        height: 32px;
        background-size: contain;
        background-image: url(/board/link.svg);
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
    .location {
        position: relative;
        background-image: url(/board/location.svg);
    }
    .location:hover p {
        opacity: 1;
    }
    p {
        opacity: 0;
        position: absolute;
        top: -75px;
        right: 17px;
        width: 376px;
        padding: 8px 16px;
        text-align: right;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        margin: 0;
        line-height: 24px;
        transition: 0.5s;
    }
    p:after {
        content: "";
        position: absolute;
        bottom: -8px;
        right: 0;
        width: 12px;
        height: 8px;
        background: rgba(0, 0, 0, 0.6);
        clip-path: polygon(0 0, 100% 0, 100% 100%);
    }
`;
export const Contents = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 20px 0;
`;
export const Info_wrap = styled.div`
    width: 100%;
    padding: 20px 0 60px;
    border-top: 1px solid #bdbdbd;
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    h3 {
        font-size: 18px;
        color: #bdbdbd;
        font-weight: 500;
    }
    p {
        font-size: 24px;
        font-weight: 700;
        color: #4f4f4f;
    }
    span {
        font-size: 36px;
        font-weight: 700;
    }
`;
export const Like = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    width: 36px;
    padding-top: 36px;
    border: none;
    background: transparent;
    cursor: pointer;
    :after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: url(/heart.svg) no-repeat;
        width: 36px;
        height: 36px;
    }
`;
export const Img_slide = styled.div`
    width: 100%;
    height: 480px;
    background-color: #eee;
`;
export const Content = styled.div`
    width: 100%;
    font-size: 18px;
    color: #4f4f4f;
    font-weight: 500;
    padding: 60px 0 20px;
`;
export const Tag_list = styled.ul`
    display: flex;
    gap: 0 8px;
    li {
        list-style: none;
        font-size: 16px;
        color: #bdbdbd;
    }
`;
export const Map_wrap = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 80px 0 60px;
    border-top: 1px solid #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
    div {
        width: 100%;
        height: 360px;
        background-color: bisque;
    }
`;
export const Btn_wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0 16px;
    padding: 60px 0 40px;
`;
