import styled from "@emotion/styled";

export const Wrapper = styled.div`
    margin: 30px auto 0;
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 86px 102px 80px;
    box-sizing: border-box;
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
    flex-direction: column;
    h3 {
        font-size: 36px;
        font-weight: 700;
        padding: 80px 0 40px;
        margin: 0;
        background-color: inherit;
    }
`;
export const Attach_img = styled.div`
    width: 100%;
    height: 480px;
    background: #f2f2f2;
    img {
        width: 100%;
    }
`;
export const Content = styled.p`
    width: 100%;
    padding: 40px 0 120px;
`;
export const Youtube = styled.div`
    position: relative;
    width: 486px;
    height: 240px;
    background: url(/board/video.svg);
    background-size: cover;
    margin: 0 auto;
    button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 48px;
        height: 48px;
        background: url(/board/play_btn.svg);
        border: none;
        text-indent: -9999px;
    }
    iframe {
        width: 100%;
        height: 100%;
        border: none;
        body {
            margin: 0;
        }
    }
`;
export const React_wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0 40px;
    padding-top: 120px;
    dl {
        width: 40px;
        display: flex;
        flex-direction: column;
        margin: 0;
        cursor: pointer;
    }
    dt {
        width: 22px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: contain;
        justify-self: center;
        margin: 0 auto 7px;
    }
    dd {
        font-size: 18px;
        line-height: 24px;
        margin: 0;
        text-align: center;
    }
    .like {
        dt {
            background-image: url(/board/like.svg);
        }
        dd {
            color: #ffd600;
        }
    }
    .dislike {
        dt {
            background-image: url(/board/dislike.svg);
        }
        dd {
            color: #828282;
        }
    }
`;
export const Btn_wrap = styled.div`
    margin: 0 auto;
    width: 1200px;
    display: flex;
    justify-content: center;
    gap: 0 24px;
    padding: 87px 0;
    button {
        cursor: pointer;
        padding: 0;
        width: 180px;
        text-align: center;
        line-height: 43px;
        font-size: 16px;
        border: 1px solid #bdbdbd;
        background-color: white;
    }
`;
