import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text.
              </p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <FaReact className="tech-icon" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <FaNodeJs className="tech-icon" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <BiLogoSpringBoot className="tech-icon" />
                  <h5>Spring Boot</h5>
                </div>
                <div className="item">
                  <FaPython className="tech-icon" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <FaJava className="tech-icon" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <FaAngular className="tech-icon" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <SiMongodb className="tech-icon" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <SiMysql className="tech-icon" />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
