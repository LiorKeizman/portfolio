import { Col } from "react-bootstrap";
import React from "react";
export const ProjectCard = ({ title, description,technology, imgUrl, Link }) => {
  return (
    <Col size={12} sm={6} md={8}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>
          <span>Technologies used: {technology}</span>
          </p>
          <a href={Link}>Live Site</a>
        </div>
      </div>
    </Col>
  )
}