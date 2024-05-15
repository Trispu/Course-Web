import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
function Carousel2({numberOfSlide,category}) {
    const [courses,setCourses] = useState([]);
    const fetchCourses = async() =>{
        const response = await axios.get("https://6627a8deb625bf088c09302d.mockapi.io/Course")
        console.log(response.data);
        setCourses(response.data);
    }
    useEffect(()=>{
        fetchCourses();
    }, []);
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper" slidesPerView={numberOfSlide}  >
        {courses.filter(course=>course.category===category).map((course)=>( 
        <SwiperSlide key={course.id}>
        <img
          src={course.image}
          
        />
      </SwiperSlide>))}
     
    
     
    </Swiper>
  );
}

export default Carousel2;
