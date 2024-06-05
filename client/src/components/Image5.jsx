import React from "react";
import Stack from "react-bootstrap/Stack";
import Defalut from "../assets/Defalut.jpg";

const Image5 = () => {
  return (
    <Stack
      gap={1}
      direction="horizontal"
      className="mb-5 ps-5"
      style={{ marginTop: "5rem" }}
    >
      <div className="p-5" style={{ width: "50%" }}>
        <div className="fw-bolder fs-1">
          Create Legal Documents Online Easily
        </div>
        <div className="">
          Join MiCounsel and start creating your legal documents in minutes.
        </div>
        <div className="mt-4">
          <button type="button" class="btn btn-dark rounded-0 me-4">
            Sign Up
          </button>
          <button
            type="button"
            class="btn btn-light border border-black rounded-0"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="ms-auto" style={{ width: "50%" }}>
        <img
          src={Defalut}
          class="img-thumbnail rounded-0"
          style={{ width: "90%", height: "20rem" }}
          alt="..."
        ></img>
      </div>
    </Stack>
  );
};

export default Image5;
