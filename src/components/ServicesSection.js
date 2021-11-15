import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";
function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <div>
      <About
        variants={fade}
        animate={controls}
        ref={element}
        className="services"
        initial="hidden"
      >
        <Description className="description">
          <h2>
            High <span>quality</span> services
          </h2>
          <Cards className="cards">
            <Card className="card">
              <div className="icons">
                <img src={clock} />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet</p>
            </Card>
            <Card className="card">
              <div className="icons">
                <img src={teamwork} />
                <h3>Teamork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet</p>
            </Card>
            <Card className="card">
              <div className="icons">
                <img src={diaphragm} />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet</p>
            </Card>
            <Card className="card">
              <div className="icons">
                <img src={money} />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet</p>
            </Card>
          </Cards>
        </Description>
        <Image className="image">
          <img src={home2} />
        </Image>
      </About>
    </div>
  );
}
const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
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
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icons {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;
