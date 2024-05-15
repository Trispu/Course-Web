
import Carousel2 from "../carousel2";
import "./index.scss";

function BgCarousel2() {
  return (
    <div className="hihi">
      <div className="tittle2">Best Seller</div>
     
      <div className="container2">
        <div>
          <Carousel2 numberOfSlide={1} category={"BestSeller"} />
       
        </div>

       
      </div>
      <div className="tittle3">Pro Course</div>
      <div className="container3">
      <div>
          <Carousel2 numberOfSlide={1} category={"Pro"} />
        </div>
      </div>
      <div className="tittle4">VIP Course</div>
      <div className="container4">
      <div>
          <Carousel2 numberOfSlide={1} category={"Vip"} />
        </div>
      </div>
      <div className="tittle5">Popular Course</div>
      <div className="container5">
      <div>
          <Carousel2 numberOfSlide={1} category={"popular"} />
        </div>
      </div>
    </div>
  );
}

export default BgCarousel2;
