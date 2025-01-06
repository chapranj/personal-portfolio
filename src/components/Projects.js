import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Ticket Ease",
      description:
        "Ticket Ease is a task management application built with the MERN stack, similar to JIRA. Users can create, update, delete, and assign tickets, while admins have the authority to delete any ticket.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/chapranj/Ticketoes.git",
    },
    {
      title: "Point of Sale System",
      description:
        "POS System application, built using Java and JDBC, dynamically generates a restaurant's POS interface from a specifically formatted text file, allowing easy customization and efficient database management for order processing.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/chapranj/POS-Application.git",
    },
    {
      title: "C-Covid Survey",
      description:
        "C COVID Survey is a COVID-19 tracking and management console application built in C using linked lists. It efficiently handles and stores records of COVID-19 patients across different cities, enabling dynamic data management and retrieval for tracking the pandemic.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/chapranj/C-Covid-Survey.git",
    },
    {
      title: "Thread Talk",
      description:
        "Thread Talk is an internal employee discussion forum built with Java, Spring Boot, and JDBC, where employees can post messages under existing threads, create new threads on various topics, and admins can delete threads.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/chapranj/ThreadTalkFS.git",
    },
    {
      title: "Expenz",
      description:
        "This is an expense tracker application made using MERN. The users can add and track their incomes and expenses, and follow a better financial plan ",
      imgUrl: projImg4,
      githubUrl: "https://github.com/chapranj/expense-tracker.git",
    },
    {
      title: "Todoz",
      description:
        "This is a TODO LIST management application implemented using React and bootstrap for the front-end and Spring Boot for the backend, security and authentication is implemented using JWT tokens. The user can add, delete and track their Todos for a better, manageable and organised Todo list. ",
      imgUrl: projImg5,
      githubUrl: "https://github.com/chapranj/Todoz.git",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
