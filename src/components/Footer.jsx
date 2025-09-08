import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-10">
      <Container>
        <Row className="items-center text-center md:text-left">
          {/* Social Links */}
          <Col
            xs={12}
            md={6}
            className="mb-4 md:mb-0 flex justify-center md:justify-start gap-6"
          >
            <a
              href="https://www.linkedin.com/in/pchauhan17/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform"
            >
              <img src={navIcon1} alt="LinkedIn" className="h-6 w-6" />
            </a>
            <a
              href="https://www.github.com/chapranj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition-transform"
            >
              <img src={navIcon2} alt="GitHub" className="h-6 w-6" />
            </a>
          </Col>

          {/* Copyright */}
          <Col
            xs={12}
            md={6}
            className="text-center md:text-end text-sm text-gray-400"
          >
            <p>
              &copy; {new Date().getFullYear()} Pranjal Chauhan. All Rights
              Reserved.
            </p>
          </Col>
        </Row>

        {/* Footer Note */}
        <Row className="mt-6">
          <Col className="text-center text-gray-500 text-sm">
            Designed & Built by Pranjal Chauhan
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
