import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile_img.jpg";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["a"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center gx-5">
          <Col xs={12} md={6} xl={7}>
            <div className="about">
              <h1>
                {`Hi! I'm Labib`}
                <span className="txt-rotate" dataPeriod="1000">
                  <span className="wrap">{text} </span>
                </span>
              </h1>
              <p>
                I am a recent Computer Engineering grad from the University of
                Waterloo with experience in Full-Stack and Frontend development.
                I’m actively seeking full time opportunities in software
                development and testing where I can grow and make an impact.
                Through my degree and co-op experiences, I've picked up on a
                variety of technologies:
              </p>
              <div class="skill-box">
                Languages: Python, Java, JavaScript, Typescript, HTML, SQL, CSS,
                C++, C{" "}
              </div>
              <div class="skill-box">
                Frameworks: React, Node.js, Django, Spring Boot, Material-UI,
                RestAPI
              </div>
              <div class="skill-box">
                Developer Tools: AWS3, Git, Jenkins, Postman, IntelliJ, Eclipse,
                Figma, Jira
              </div>
              <p>
                Here’s a look at my experience and projects to showcase my
                skills, while I continue learning and growing while sipping on
                my matcha latte :)
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="profile-pic">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
