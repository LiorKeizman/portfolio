
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo4.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from '../assets/img/telephone.svg'

export const Footer = () => {
  return (
    <>
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lior-keizman-7b99a8252/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/LiorKeizman"><img src={navIcon5} alt="Icon" /></a>
              <a href="https://www.instagram.com/lior_keizman/"><img src={navIcon3} alt="Icon" /></a>
              <a href="tel:0546365833"><img src={navIcon6} alt="" /></a>
              <a rel="noopener noreferrer" target="_blank" href="mailto:lior.keizman1@gmail.com"
                  title="Lior.Keizman@gmail.com"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}