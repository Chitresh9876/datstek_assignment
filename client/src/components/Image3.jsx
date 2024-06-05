import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/esm/Stack";
import Defalut from "../assets/Defalut.jpg";

const Image3 = () => {
  return (
    <div className="">
      <Container className="text-center mb-5" style={{ width: "50%" }}>
        <p>MiCousel</p>
        <h1 className="fw-bold mb-3">
          Create Legal Documents & Contracts Online in Minutes
        </h1>
        <p className="">
          Welcome to MiCounsel, the platform that allows you to easily create
          legal documents and contracts online in just minutes. Say goodbye to
          the hassle of traditional paperwork and enjoy the convenience of our
          user-friendly interface
        </p>
      </Container>

      <Stack
        direction="horizontal"
        gap={5}
        className="justify-content-center mb-5"
      >
        <Card className="text-center rounded-0" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={Defalut}
            style={{ width: "20rem", height: "12rem" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center rounded-0" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={Defalut}
            style={{ width: "20rem", height: "12rem" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center rounded-0" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={Defalut}
            style={{ width: "20rem", height: "12rem" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Stack>
      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-center mb-5"
      >
        <button
          type="button"
          class="btn border border-black rounded-0 justify-content-center"
        >
          Learn More
        </button>
        <button type="button" class="btn rounded-0">
          `Learn More &#62;`
        </button>
      </Stack>
    </div>
  );
};

export default Image3;
