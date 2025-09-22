import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return githubUrl ? (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
    >
      <Col size={12} sm={8} md={12}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title} </h4>
            <div id="des">{description}</div>
          </div>
        </div>
      </Col>
    </a>
  ) : (
    <Col size={12} sm={8} md={12}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title} </h4>=<div>{description}</div>
        </div>
      </div>
    </Col>
  );
};
