import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./MySwiper.css";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

const MySwiper = () => {
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                centeredSlides={true}
                effect={"fade"}
                speed={2000}
                autoplay={{ delay: 2000 }}
            >
                <SwiperSlide className="swiper-slide">
                    <img
                        className="swiperImg"
                        src={img1}
                        alt=""
                        style={{
                            height: "100vh",
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    {" "}
                    <img
                        className="swiperImg"
                        src={img2}
                        alt=""
                        style={{
                            height: "100vh",
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />{" "}
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img
                        className="swiperImg"
                        src={img3}
                        alt=""
                        // style={{
                        //     height: "100vh",
                        //     width: "100%",
                        //     objectFit: "cover",
                        // }}
                    />{" "}
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img
                        className="swiperImg"
                        src={img4}
                        alt=""
                        style={{
                            height: "100vh",
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />{" "}
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default MySwiper;
