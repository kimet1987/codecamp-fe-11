import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { MySlide } from "./style";

SwiperCore.use([Autoplay, Navigation]);

export default function App() {
    return (
        <MySlide>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <img src="./slide/lookbook.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./slide/lookbook2.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./slide/lookbook3.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./slide/lookbook4.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./slide/lookbook5.jpeg" />
                </SwiperSlide>
            </Swiper>
        </MySlide>
    );
}
