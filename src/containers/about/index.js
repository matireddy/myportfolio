import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Headerpage from "../../components/header";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import "./style.css";

const personalDetails = [
  {
    label: "Name",
    value: "krishna reddy",
  },
  {
    label: "Age",
    value: "27",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "email",
    value: "matiXXXXXXXXX@gmail.com",
  },
  {
    label: "contact No.",
    value: "703xxxxxxxx",
  },
];

const jobSummary =
  "APIM Developer in Microsoft Azure Platform with 2.2 years of industry experience working in Ecommerce Applications. Passionate and skilled Front-end Developer with hands-on experience in building responsive and user-friendly web applications using React.js. Seeking opportunities to front End Developer";

const About = () => {
  return (
    <section id="about" className="about">
      <Headerpage headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3 className="personalInformation">Personal information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_serviceWrapper">
          <Animate
            play
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <div className="about_content_serviceWrapper_innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
