import { Col } from "react-bootstrap"; // Import Col from react-bootstrap

export const ExperienceCard = ({ title, company, duration }) => {
  return (
    <div className="experience-card">
      <h5 style={{ fontWeight: "bold", color: "#f2f2f2" }}>{title}</h5>
      <h6 style={{ fontStyle: "italic", color: "#a5a5a5" }}>{company}</h6>
      <p style={{ color: "#b8b8b8", fontSize: "14px" }}>{duration}</p>
    </div>
  );
};
