import { useState } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import evertzLogo from "../assets/img/evertz-logo.png";

export const Experiences = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      title: "Product Verification Specialist",
      company: "Evertz Microsystems",
      logo: evertzLogo,
      duration: "May 2025 - Aug 2025",
      duties: [
        "Automated deployment and configuration of cloud servers using Terraform and Python, leveraging multithreading to provision multiple instances in parallel.",
        "Tested video compression systems transmitting live video over IP using UDP, SRT, and RIST protocols.",
        "Designed and automated end-to-end test setups with Python to configure encoders, decoders, and network paths, simulating real broadcast workflows.",
        "Verified Forward Error Correction (FEC) by analyzing packet recovery under varying bitrates and packet loss conditions.",
        "Automated FEC tests using Python and SNMP, logging results for performance analysis.",
      ],
    },
    {
      title: "Software QA Engineer",
      company: "Evertz Microsystems",
      logo: evertzLogo,
      duration: "Sept 2024 - Dec 2024",
      duties: [
        "Developed automation testing scripts using Jest for a broadcasting device to streamline video stream configurations, with a focus on multicast workflows.",
        "Automated API workflows to improve testing efficiency and reduce manual effort using JavaScript (Node.js) and Python.",
        "Simulated real-world scenarios by setting up and testing diverse environments, ensuring product performance and reliability.",
        "Performed API testing using Postman to validate endpoints and ensure API reliability.",
        "Worked with transmission protocols like UDP, SRT, and RIST, gaining hands-on experience in maintaining high-quality streaming standards.",
      ],
    },
    {
      title: "Product Verification Specialist",
      company: "Evertz Microsystems",
      logo: evertzLogo,
      duration: "Jan 2024 - Apr 2024",
      duties: [
        "Created a help webpage to make it easier for users to access documentation and troubleshooting guides.",
        "Used Linux CLI for tasks like imaging servers, installing software, and troubleshooting network and system issues.",
        "Wrote Python scripts to manage and update system configurations using PySNMP.",
        "Worked with SDI-IP video routers and networked systems, gaining hands-on experience with routing and device connectivity.",
        "Tested and verified hardware and software systems, focusing on improving reliability and identifying potential issues.",
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-20 px-4 relative overflow-hidden"
      id="experiences"
    >
      <Container>
        <Row className="justify-content-center mb-12">
          <Col size={12} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">
                    Experiences
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded"></div>
                  <p className="text-gray-400 max-w-xl mx-auto mb-12">
                    A detailed overview of my professional experiences and
                    responsibilities.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <Tab.Container id="experiences-tabs" defaultActiveKey="first">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row className="justify-center">
                {experiences.map((experience, index) => (
                  <Col key={index} size={12} sm={12} md={10} className="mb-6">
                    <div
                      className="experience-card-wrapper p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      <Row className="align-items-center">
                        <Col
                          xs={3}
                          md={2}
                          className="flex justify-center items-center"
                        >
                          <div className="company-logo w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500 shadow-md">
                            <img
                              src={experience.logo}
                              alt={`${experience.company} logo`}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>
                        </Col>
                        <Col xs={9} md={10}>
                          <ExperienceCard {...experience} />
                        </Col>
                      </Row>

                      {expandedIndex === index && (
                        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                          {experience.duties.map((duty, idx) => (
                            <li key={idx}>{duty}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
        style={{ opacity: 0.1, position: "absolute", bottom: 0, right: 0 }}
      />
    </section>
  );
};
