import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
export const Wrapper = styled.div`
    height: 300px;
    .slick-slider {
        position: relative;
        height: 100%;
        width: 80%;
        margin: 0 auto;
    }
    .slick-arrow {
        background-color: tomato;
    }
    .slick-dots {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export default function Navi() {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </Wrapper>
    );
}
