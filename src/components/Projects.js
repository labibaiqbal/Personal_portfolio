import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "ReactSpringUploader",
      description:
        "A Spring-boot application integrated with React.js that enables users to upload files to Amazon S3 with ease.",
      imgUrl: projImg1,
      githubUrl:
        "https://github.com/labibaiqbal/Spring-Boot-React.js-AWS-S3-Full-Stack-Development",
    },

    {
      title: "Ontario-Trail-App",
      description:
        "Ontario Trail is a React app that helps users discover popular and hidden hiking trails across Ontario, providing trail details and difficulty levels.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/labibaiqbal/ontario-trail-app",
    },
    {
      title: "SpotifyClone",
      description:
        "Full-stack music streaming web application using Django, integrating user authentication, playlist management, and real-time data from RapidAPI to replicate core Spotify features.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/labibaiqbal/spotify_clone",
    },
    {
      title: "Leaf-Classification",
      description:
        "Part of fourth year project- A deep learning model that classifies plants such as basil and lemon with a confidence score, enabling SmartGrow to adjust light, water, and humidity dynamically.",
      imgUrl: projImg4,
      githubUrl: "https://github.com/labibaiqbal/leaf_classification",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <h2> Personal Projects</h2>
        <Row className="gx-5 gy-5">
          {projects.map((project, index) => (
            <Col key={index} md={6}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="background" /> */}
    </section>
  );
};
