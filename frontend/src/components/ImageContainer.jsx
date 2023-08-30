import React from "react";
import { Container } from "react-bootstrap";

function ImageContainer({ children, width, height }) {
  return (
    <Container className="d-flex justify-content-center"
      style={{
        height: height,
        width: width,
        // maxHeight: "200px",
        overflow: "hidden"
      }}
    >
      {children}
    </Container>
  );
}

ImageContainer.defaultProps = {
  height: "200px",
  width: "auto",
  //   maxHeight: "200px",
};

export default ImageContainer;
