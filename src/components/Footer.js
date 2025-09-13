import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github-500.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div>
          <Col size={12} sm={6} className=" justify-content-end ">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/labiba-iqbal-06627b219/">
                <img src={navIcon1} alt="linkein" />
              </a>
              <a href="https://github.com/labibaiqbal">
                <img src={navIcon2} alt="github" />
              </a>
            </div>
            <p>This portfolio was made using React and Bootstrap.</p>
          </Col>
        </div>
      </Container>
    </footer>
  );
};
