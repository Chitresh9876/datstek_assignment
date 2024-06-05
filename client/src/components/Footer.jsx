import React from 'react'
import Stack from 'react-bootstrap/esm/Stack';

const Footer = () => {
  return (
    <>
      <Stack direction="horizontal" className="justify-content-between mb-5">
        <div style={{ lineHeight: "0.5rem" }}>
          <p className="fw-bold">Get our updates</p>
          <p>Subscribe to our newsletter for the latest news and updates</p>
        </div>
        <div>
          <input
            type="text"
            class="p-2 border-black rounded-0 me-4"
            placeholder="Enter email adderss"
            aria-label="Username"
          ></input>
          <button className="btn border-black border-2 rounded-0 ps-3 pe-3">
            Subscribe
          </button>
        </div>
      </Stack>

      <Stack gap={3} direction="horizontal" className="justify-content-between mb-5">
        <h3 className="fw-bold">Logo</h3>
        <div>
          <p className="fw-bold">About Us</p>
          <p>Services</p>
          <p>Pricing</p>
          <p>FAQ</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>

        <div>
          <p className="fw-bold">Support</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Security</p>
          <p>Help Center</p>
          <p>Feedback</p>
        </div>

        <div>
          <p className="fw-bold">Community</p>
          <p>Forum</p>
          <p>Events</p>
          <p>Partners</p>
          <p>Careers</p>
          <p>Press</p>
        </div>

        <div>
          <p className="fw-bold">Advertise</p>
          <p>Become a Partner</p>
          <p>Affiliate Program</p>
          <p>For Developers</p>
          <p>Sitemap</p>
          <p>Terms and Conditions</p>
        </div>

        <div>
          <p className="fw-bold">Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Data Protection</p>
          <p>GDPR Compliance</p>
          <p>Security Measures</p>
          <p>User Agreement</p>
              </div>
              

      </Stack>
    </>
  );
}

export default Footer
