import React from "react";
import { StarFill } from "react-bootstrap-icons";
import Stack from "react-bootstrap/esm/Stack";
import Defalut from "../assets/Defalut.jpg";


const Feedback = ({ feedback, name, companyName }) => {
  return (
    <div>
      <Stack direction="horizontal" gap={1} className="mb-3">
        <StarFill />
        <StarFill />
        <StarFill />
        <StarFill />
        <StarFill />
      </Stack>
      <p className="fw-bold">{feedback}</p>
      <Stack gap={2} direction="horizontal">
        <img
          src={Defalut}
          class="img-thumbnail rounded-circle"
          style={{ width: "4rem", height: "4rem" }}
          alt="..."
        ></img>
        <div>
          {name}
          <br />
          {companyName}
        </div>
        <div
          className="border-start border-black"
          style={{ height: "4rem" }}
        ></div>
        <p className="fw-bold mt-3">Webflow</p>
      </Stack>
    </div>
  );
};

export default Feedback;
