import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./style.css";
const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const handleButton = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Krishna
          <br />
          Front End Developer
        </h1>
      </div>
      <Animate
        play
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home_contact-me">
          <button onClick={handleButton}>Contact Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
