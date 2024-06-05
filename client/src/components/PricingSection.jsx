import React from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PricingSection = () => {
  return (
    <>
      <Container className="text-center mb-5" style={{ width: "50%" }}>
        <p>MiCousel</p>
        <h1 className="fw-bold mb-3">Pricing Options</h1>
        <p className="mb-4">Choose the plan that suits your needs and budget</p>
        <button type="button" class="btn btn-dark rounded-0">
          Monthly
        </button>
        <button
          type="button"
          class="btn btn-light border border-black rounded-0"
        >
          Yearly
        </button>
      </Container>
      <Stack gap={3} direction="horizontal" className="justify-content-center mb-5">
        <Card
          className="border border-black rounded-0"
          style={{ width: "22rem", height: "22rem" }}
        >
          <Card.Body>
            <Card.Subtitle className="mb-2 fw-bold text-center">
              Basic Plan
            </Card.Subtitle>
            <Card.Title className="text-center fs-1">$19/mo</Card.Title>
            <Card.Text>
              <p>&#10003; Create Legal Documents Online</p>
              <p>&#10003; Access to Legal Templates</p>
              <p>&#10003; Secure Document Storage</p>
            </Card.Text>
            <Button
              className="btn btn-dark rounded-0"
              style={{ width: "20rem", position: "relative", top: "5rem" }}
            >
              Get Started
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="border border-black rounded-0"
          style={{ width: "22rem", height: "22rem" }}
        >
          <Card.Body>
            <Card.Subtitle className="mb-2 fw-bold text-center">
              Business Plan
            </Card.Subtitle>
            <Card.Title className="text-center fs-1">$29/mo</Card.Title>
            <Card.Text>
              <p>&#10003; Priority Customer Support</p>
              <p>&#10003; Unlimited Document Editing</p>
              <p>&#10003; Advanced Document Sharing</p>
              <p>&#10003; Collaboration Tools</p>
              <p>&#10003; Premium Document Templates</p>
            </Card.Text>
            <Button
              className="btn btn-dark rounded-0"
              style={{ width: "20rem" }}
            >
              Get Started
            </Button>
          </Card.Body>
        </Card>
      </Stack>
    </>
  );
};

export default PricingSection;
