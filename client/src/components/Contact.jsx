import React from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import { Envelope } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";
import { GeoAlt } from "react-bootstrap-icons";
import Footer from './Footer';
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";


const Contact = () => {
    return (
      <>
        <div
          className="text-center"
          style={{ marginTop: "7rem", marginBottom: "7rem" }}
        >
          <h1 className="fw-bold mb-3"> Get in Touch</h1>
          <p className="mb-5">
            We're here to help. Contact us for any inquires or support needs.
          </p>
          <Stack
            gap={4}
            direction="horizontal"
            className="justify-content-between"
          >
            <Stack gap={1} className="align-item-center">
              <div>
                <Envelope style={{ width: "2rem", height: "2rem" }} />
              </div>
              <h3 className="fw-bold">Email</h3>
              <p>Send us an email and we will get back to you promptly.</p>
              <a href="/" style={{ color: "black" }}>
                hello@relume.io
              </a>
            </Stack>
            <Stack gap={1} className="align-item-center">
              <div>
                <Telephone style={{ width: "2rem", height: "2rem" }} />
              </div>
              <h3 className="fw-bold">Phone</h3>
              <p>
                Give us a call and speak with one of our friendly
                representative.
              </p>
              <a href="/" style={{ color: "black" }}>
                "+1(555) 000-0000"
              </a>
            </Stack>
            <Stack gap={1} className="align-item-center">
              <div>
                <GeoAlt style={{ width: "2rem", height: "2rem" }} />
              </div>
              <h3 className="fw-bold">Office</h3>
              <p>
                Visit our office for face-to-face consultant or to drop of
                documents.
              </p>
              <a href="/" style={{ color: "black" }}>
                123 Sample St. Sydney NSW 2000 AU
              </a>
            </Stack>
          </Stack>
        </div>
        <Footer />
        <div className=" border border-black mb-5"></div>
        <Stack direction="horizontal" className="justify-content-between mb-1">
          <div>
            &#169; 2024 MiCoursel. All rights reserved.{" "}
            <span style={{ textDecoration: "underline", marginLeft: "1rem" }}>
              Privacy Policy
            </span>{" "}
            <span style={{ textDecoration: "underline", marginLeft: "1rem" }}>
              Terms of Service
            </span>
            <span style={{ textDecoration: "underline", marginLeft: "1rem" }}>
              Cookies Policy
            </span>
          </div>
                <div>
                    <Facebook className='ms-2'/>
                    <Instagram className='ms-2'/>
                    <X className='ms-2'/>
                    <Linkedin className='ms-2'/>
                    <Youtube className='ms-2'/>
          </div>
        </Stack>
      </>
    );
}

export default Contact
