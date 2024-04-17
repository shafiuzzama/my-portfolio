import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ticket from "../../img/ticket.png";
import Authentication from "../../img/authentication.png"
// import Burger from "../../img/burger.png";
import tourism from "../../img/tourismim.png"
import Email from "../../img/email.png";
import Parking from "../../img/parking.png";
// import Shopping from "../../img/shopping.png";
import youtube from "../../img/ytp.png"
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import coursee2e from "../../img/coursee2e.webp";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  function handleImageClickburger() {
    window.open("https://tourism-project-jade.vercel.app/");
  }
  function handleImageClickshopping() {
    window.open('https://you-tube-clone-nine-woad.vercel.app/');
  }
  function handleImageClickCourse(){
window.open('https://course-management-eight.vercel.app/')
  }

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={-13}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
          <img src={tourism} alt=""  onClick={handleImageClickburger} height={"100%"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={youtube} alt="" onClick={handleImageClickshopping} height={"100%"}/>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={coursee2e} alt="" onClick={handleImageClickCourse} width={"100%"} height={"100%"} />
        </SwiperSlide>
        
         
     
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
