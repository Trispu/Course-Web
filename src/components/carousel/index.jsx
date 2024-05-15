
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./index.scss"
function Carousel() {
  return (
    <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.imgur.com/oZTbnz1.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/Ww4tFO2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/NuvfKwh.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/dW2wzG0.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/Ad6SINr.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.imgur.com/uHHxJk4.png" alt="" /></SwiperSlide>
        
      </Swiper>
  )
}

export default Carousel