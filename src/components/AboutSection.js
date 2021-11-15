import React from "react";
import homeImg1 from "../img/home1.png";
import styled from "styled-components";
import { titleAnim, fade, photoAnim } from "../animation";
import { motion } from "framer-motion";
import Wave from "../components/Wave";
function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={homeImg1} alt="camera guy" />
      </Image>
      <Wave />
    </About>
  );
}

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    z-index: 2;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default AboutSection;
