import styled from "@emotion/styled";
export const Wrapper = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
    .slick-prev,
    .slick-next {
        top: 176px;
        width: 48px;
        height: 48px;
        // background-color: rgba(255, 255, 255, 0.6);
        z-index: 1;
    }
    .slick-prev::before,
    .slick-next::before {
        font-size: 54px;
    }
    .slick-prev {
        left: 360px;
    }
    .slick-next {
        right: 360px;
    }
`;
export const SliderItem = styled.div`
    width: 100%;
    position: relative;
    img {
        width: 100%;
        object-fit: cover;
    }
    h3 {
        position: absolute;
        top: 102px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 48px;
        font-weight: 700;
        color: white;
    }
    p {
        position: absolute;
        top: 206px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        font-weight: 500;
        width: 400px;
        text-align: center;
        color: white;
    }
`;
