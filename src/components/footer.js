import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import "./main.scss"

const Footer = () => (
  <footer
    style={{
      background: `#595757`,
      display: "flex",
      padding: `4rem 0`,
      color: `#ffffff`,
    }}
  >
    <Container>
      <Row>
        <Col className="col-2" id="footer-col-1">
          <Link className="link" to="/">
            <StaticImage src="../images/Crest-Logo.png" />
          </Link>
          <div className="footer-copy">
            <div className="footer-contact">
              <p>Connect with us</p>
              <Link to="/">
                <StaticImage src="../images/instagram_icon.png" />
              </Link>
              <Link to="/">
                <StaticImage src="../images/facebook_icon.png" />
              </Link>
              <Link to="/">
                <StaticImage src="../images/Dark_Blue.png" />
              </Link>
              <Link to="/">
                <StaticImage src="../images/linkedin_icon.png" />
              </Link>
            </div>
            <div className="footer-contact">
              <p>Privacy & Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="footer-contact">
              <p>All rights are reserved to crest foundation</p>
            </div>
          </div>
        </Col>
        <Col className="col-1" id="footer-col-2">
          <h4>About Us</h4>
          <p>
            <Link className="link" to="#">
              Our Mission
            </Link>
          </p>
          <p>
            <Link className="link" to="#">
              Our Commitment
            </Link>
          </p>
          <p>
            <Link className="link" to="#">
              Our Hope
            </Link>
          </p>
          <p>
            <Link className="link" to="#">
              Our Team
            </Link>
          </p>
          <p>
            <Link className="link" to="#">
              Contact Us
            </Link>
          </p>
        </Col>
        <Col className="col-2" id="footer-col-5">
          <h4>Quick Links</h4>
          <p>
            <Link className="link" to="/our-approach/">
              Our Approach
            </Link>
          </p>
          <p>
            <Link className="link" to="/our-impact/">
              Our Impact
            </Link>
          </p>
          <p>
            <Link className="link" to="/our-goal/">
              Our Goal
            </Link>
          </p>
          <p>
            <Link className="link" to="/blog/">
              Our Blog
            </Link>
          </p>
        </Col>
        <Col className="col-3" id="footer-col-6">
          <div className="footer-address">
            <h4>Regions</h4>
            <p>
              UNITED STATES - HQ
              <br />
              <a
                href="https://maps.app.goo.gl/3fYcLdjfibAvFiJC8"
                target="_blank"
              >
                700 12th Street, N.W. , Suite 700, Washington DC - 20005.
              </a>
              <br />
              <a href="tel:+12023449558" target="_blank">
                +1 202 344 9558
              </a>
            </p>
            <p>
              INDIA
              <br />
              <a
                href="https://maps.google.com/?cid=3990962621001398421&entry=gps"
                target="_blank"
              >
                Sri Vishnu Elite, 5th floor, Jayabheri Enclave, Gachibowli,
                Hyderabad - 500032.
              </a>
              <br />
              <a href="tel:+919866657462" target="_blank">
                +91 98666 57462
              </a>
            </p>
          </div>
        </Col>
        <Col className="col-3">
          <div className="footer-address">
            <p>
              SINGAPORE
              <br />
              <a
                href="https://maps.google.com/?q=1+Shenton+Way%2C+10+04+One+Shenton+Way%2C+Singapore+068803&ftid=0x31da1911ff0cbdc1:0x7756d6cb3c76fab6&entry=gps"
                target="_blank"
              >
                1 Shenton Way, #10-04, Singapore - 068803.
              </a>
              <br />
              <a href="tel:+6597537487" target="_blank">
                +65 9753 7487
              </a>
            </p>
            <p>
              AUSTRALIA
              <br />
              <a
                href="https://maps.google.com/?q=8+Brookside+Dr%2C+Wyndham+Vale+VIC+3024%2C+Australia&ftid=0x6ad69aa06c791b4d:0xfffdc9436c681c70&entry=gps"
                target="_blank"
              >
                8 Brookside Dr, Wyndham Vale, VIC, Australia - 3024.
              </a>
              <br />
              <a href="tel:+61403983113" target="_blank">
                +61 403983113
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
