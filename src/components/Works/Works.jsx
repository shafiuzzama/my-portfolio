import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import vtu from "../../img/vtu-logo.png";
import byjus from "../../img/byjus.png";
import brioso from "../../img/brioso.png"
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Versatile solutions spanning design, software development,  Empowering diverse
            <br />
            brands and clients with expertise in 
            Reactjs, Javacript, Css, Html, Redux.
            <br />
            ensuring comprehensive solutions across industries.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle vtu">
            <img src={vtu} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={brioso} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle byjus-circle">
            <img src={byjus} alt="" style={{ objectFit: "fill" }} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
