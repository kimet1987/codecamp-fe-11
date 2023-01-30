import * as B from "../../../../styles/banner";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMemo } from "react";

interface sliderProps {
    autoplay?: boolean | number;
    speed?: number;
    loop?: boolean;
}
interface itemsProps {
    item: string;
    name: string;
    disc: string;
    title: string;
}
const items: itemsProps[] = [
    {
        item: "/beach.jpeg",
        name: "이미지01",
        title: "Slide Title",
        disc: "캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고 각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.",
    },
    {
        item: "/beach1.jpeg",
        name: "이미지02",
        title: "Slide Title",
        disc: "캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고 각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.",
    },
    {
        item: "/sunset.jpeg",
        name: "이미지03",
        title: "Slide Title",
        disc: "캐러셀은 이미지 로테이터, 슬라이더 등 다양한 이름으로 불리는데 같은 공간에 하나 이상의 콘텐츠를 보여주며, 한 번에 하나씩만 보이고 각각은 이미지와 약간의 텍스트로 구성되어있다고 합니다.",
    },
];

export default function Banner({
    autoplay = false,
    speed = 300,
    loop = true,
}: sliderProps): JSX.Element {
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
        <B.Wrapper>
            <Slider>
                {items.map((item, index) => (
                    <B.SliderItem key={index}>
                        <img src={item.item} alt={item.name} />
                        <h3>{item.title}</h3>
                        <p>{item.disc}</p>
                    </B.SliderItem>
                ))}
            </Slider>
        </B.Wrapper>
    );
}
