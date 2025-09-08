import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .send(
        "service_b80s6bt", // Replace with your EmailJS service ID
        "template_oxeyv9i", // Replace with your EmailJS template ID
        formDetails,
        "_pMfUKuLKZxlfKkpq" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: "Message sent successfully!" });
        },
        (error) => {
          setButtonText("Send");
          setStatus({
            success: false,
            message: "Something went wrong. Please try again.",
          });
        }
      );
  };

  return (
    <section
      className="contact min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-20 px-4"
      id="connect"
    >
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Row className="gap-4">
                      <Col xs={12} sm={6}>
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </Col>
                      <Col xs={12}>
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        ></textarea>
                      </Col>
                      <Col xs={12}>
                        <button
                          type="submit"
                          className="w-full sm:w-auto px-6 py-2 rounded-md bg-purple-500 hover:bg-purple-600 transition font-semibold"
                        >
                          {buttonText}
                        </button>
                      </Col>
                      {status.message && (
                        <Col xs={12}>
                          <p
                            className={`${
                              status.success ? "text-green-500" : "text-red-500"
                            } mt-2 text-center`}
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
