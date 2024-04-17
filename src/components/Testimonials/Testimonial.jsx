import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/sifa.png";
import profilePic2 from "../../img/suryabhai.png";
import profilePic3 from "../../img/sunil.png";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      
      review:
       "Working with Shafi was an absolute pleasure! His attention to detail and ability to turn complex ideas into seamless user experiences is truly remarkable. He is a collaborative genius who elevates every project with much passion and dedication."
    },
    {
      img: profilePic2,
      review:
        "Shafi is a true rockstar developer! his dedication to pixel-perfect design and staying ahead of industry trends makes them an invaluable asset to any team."
    },
    {
      img: profilePic3,
      review:
        "It's rare to come across someone as talented and dedicated as Shafi. His innovative approach to web development sets him apart as a true visionary."
    },
    {
      img: profilePic4,
      review:
        "Shafi is a true rockstar developer! Their dedication to pixel-perfect design and staying ahead of industry trends makes them an invaluable asset to any team. They consistently deliver exceptional results and inspire others with their creativity."
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
