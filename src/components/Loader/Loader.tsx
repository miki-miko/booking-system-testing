import React from "react";
import { Container } from "react-bootstrap";

import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <Container className="LoaderWrapper">
      <div className="Loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
export default Loader;
