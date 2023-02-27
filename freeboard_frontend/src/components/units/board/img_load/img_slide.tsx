import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMemo } from "react";
import styled from "@emotion/styled";
import { IQuery } from "../../../../commons/types/generated/types";

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    overflow: hidden;
    .slick-arrow {
        width: 48px;
        height: 48px;
        z-index: 1;
    }
    .slick-arrow::before {
        font-size: 54px;
        color: #2c2c2c;
    }
    .slick-prev {
        left: 10px;
    }
    .slick-next {
        right: 10px;
    }
`;
export const SliderItem = styled.div`
    width: 100%;
    position: relative;
    img {
        width: 100%;
        object-fit: cover;
    }
`;

interface sliderProps {
    autoplay?: boolean | number;
    speed?: number;
    loop?: boolean;
}
interface IImgSlide {
    //data?: Pick<IQuery, "fetchBoard"> | Pick<IQuery, "fetchUseditem">;
    data?: any;
}

export default function Img_slide(
    props: IImgSlide,
    { autoplay = false, speed = 300, loop = true }: sliderProps
): JSX.Element {
    const settings = useMemo<Settings>(
        () => ({
            dots: true,
            infinite: loop,
            speed: speed,
            slidesToShow: 1,
            autoplay: Boolean(autoplay),
            autoplaySpeed: typeof autoplay === "boolean" ? 3000 : autoplay,
        }),
        [autoplay, loop, speed]
    );

    return (
        <Wrapper>
            <Slider>
                {props.data?.fetchBoard
                    ? props.data?.fetchBoard.images
                          ?.filter((el: any) => el)
                          .map((el: any) => (
                              <SliderItem key={el}>
                                  <img
                                      key={el}
                                      src={`https://storage.googleapis.com/${el}`}
                                  />
                              </SliderItem>
                          ))
                    : props.data?.fetchUseditem.images
                          ?.filter((el: any) => el)
                          .map((el: any) => (
                              <SliderItem key={el}>
                                  <img
                                      key={el}
                                      src={`https://storage.googleapis.com/${el}`}
                                  />
                              </SliderItem>
                          ))}
            </Slider>
        </Wrapper>
    );
}
