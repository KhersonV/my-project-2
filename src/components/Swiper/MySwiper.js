import { Navigation, Pagination,  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import "./MySwiper.css"
import img1 from "../../img/img1.png"
import img2 from "../../img/img2.jpg"
import img3 from "../../img/img3.jpg"
import img4 from "../../img/img4.jpg"

const MySwiper = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination,]}
        spaceBetween={500}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       
        centeredSlides={true}
      >
        <SwiperSlide className='swiper-slide'>
          <img className='swiperImg' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'> <img className='swiperImg' src={img2} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-slide'><img className='swiperImg' src={img3} alt="" /></SwiperSlide>
        <SwiperSlide className='swiper-slide'><img className='swiperImg' src={img4} alt="" /></SwiperSlide>

      </Swiper>
    </div>
  )
}
export default MySwiper