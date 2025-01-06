import { Container, Row, Col, Tab } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard"; // Assuming you'll create a similar card component for experiences
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

// Import logos
import evertzLogo from "../assets/img/evertz-logo.png"; // Replace with actual logo path

export const Experiences = () => {
  const experiences = [
    {
      title: "Software QA Engineer",
      company: "Evertz Microsystems",
      logo: evertzLogo, // Company logo
      duration: "Sept 2024 - Dec 2024",
    },
    {
      title: "Product Verification Specialist",
      company: "Evertz Microsystems",
      logo: evertzLogo, // Company logo
      duration: "Jan 2024 - Apr 2024",
    },
  ];

  return (
    <section
      className="experience"
      id="experiences"
      style={{ background: "black", color: "white" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col size={12} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Experiences</h2>
                  <Tab.Container id="experiences-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {experiences.map((experience, index) => {
                            return (
                              <Col key={index} size={12} sm={12} md={12}>
                                <div className="experience-card-wrapper">
                                  <Row className="align-items-center">
                                    {/* Logo on the left */}
                                    <Col xs={3} md={2} className="text-center">
                                      <div className="company-logo">
                                        <img
                                          src={experience.logo}
                                          alt={`${experience.company} logo`}
                                          style={{
                                            maxWidth: "80px",
                                            margin: "10px",
                                          }}
                                        />
                                      </div>
                                    </Col>
                                    {/* Content on the right */}
                                    <Col xs={9} md={10}>
                                      <ExperienceCard {...experience} />
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
