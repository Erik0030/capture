import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import { motion } from "framer-motion";
function FaqSection() {
  const [element, controls] = useScroll();
  return (
    <Faq
      transition={{ duration: 0.5 }}
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <h2>
        Any Questions<span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferrent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}
const Faq = styled(motion.div)`
  min-height: 90vh;
  display: block;
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
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
