import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.scss"
import "../styles/about.scss"

const Contact = () => (
  <div>
    <Seo title="Contact" />
    <Container className="about-subs">
      <Row>
        <Col>
          <h2 className="crest-heading mb-20">CONTACT US</h2>
          <p className="mission-discrption-info">
            We’re here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
        </Col>
      </Row>

      <div className="crest-contact">
        <Row className="contact-list">
          <Col class="col-lg-6 col-sm-12">
            <h3 className="contact-heading">Reach Out To Us -</h3>
            <p>
              <a href="mailto:info@crest.eco" target="_blank">
                info@crest.eco
              </a>
            </p>
            <div className="crest-add">
              <h4>United States - HQ</h4>
              <ul>
                <li>
                  <StaticImage src="../images/location.png" alt="" />
                  <p>
                    <a
                      href="https://maps.app.goo.gl/3fYcLdjfibAvFiJC8"
                      target="_blank"
                    >
                      700 12th Street, N.W. , Suite 700, Washington DC - 20005.
                    </a>
                  </p>
                </li>
                <li>
                  <StaticImage src="../images/phone.png" alt="" />
                  <p>
                    <a href="tel:+12023449558" target="_blank">
                      +1 202 344 9558
                    </a>
                  </p>
                </li>
              </ul>
            </div>

            <div className="crest-add">
              <h4 className="contact-heading">India</h4>
              <ul>
                <li>
                  <StaticImage src="../images/location.png" alt="" />
                  <p>
                    <a
                      href="https://maps.google.com/?cid=3990962621001398421&entry=gps"
                      target="_blank"
                    >
                      Sri Vishnu Elite, 5th floor, Jayabheri Enclave,
                      Gachibowli, Hyderabad - 500032.
                    </a>
                  </p>
                </li>
                <li>
                  <StaticImage src="../images/phone.png" alt="" />
                  <p>
                    <a href="tel:+919866657462" target="_blank">
                      +91 98666 57462
                    </a>
                  </p>
                </li>
              </ul>
            </div>

            <div className="crest-add">
              <h4 className="contact-heading">Singapore</h4>
              <ul>
                <li>
                  <StaticImage src="../images/location.png" alt="" />
                  <p>
                    <a
                      href="https://maps.google.com/?q=1+Shenton+Way%2C+10+04+One+Shenton+Way%2C+Singapore+068803&ftid=0x31da1911ff0cbdc1:0x7756d6cb3c76fab6&entry=gps"
                      target="_blank"
                    >
                      1 Shenton Way, #10-04, Singapore - 068803.
                    </a>
                  </p>
                </li>
                <li>
                  <StaticImage src="../images/phone.png" alt="" />
                  <p>
                    <a href="tel:+6597537487" target="_blank">
                      +65 9753 7487
                    </a>
                  </p>
                </li>
              </ul>
            </div>

            <div className="crest-add">
              <h4 className="contact-heading">Australia</h4>
              <ul>
                <li>
                  <StaticImage src="../images/location.png" alt="" />
                  <p>
                    <a
                      href="https://maps.google.com/?q=8+Brookside+Dr%2C+Wyndham+Vale+VIC+3024%2C+Australia&ftid=0x6ad69aa06c791b4d:0xfffdc9436c681c70&entry=gps"
                      target="_blank"
                    >
                      8 Brookside Dr, Wyndham Vale, VIC, Australia - 3024.
                    </a>
                  </p>
                </li>
                <li>
                  <StaticImage src="../images/phone.png" alt="" />
                  <p>
                    <a href="tel:+61403983113" target="_blank">
                      +61 403983113
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col class="col-lg-6 col-sm-12">
            <div className="crest-contact-form">
              <h4>Get In Touch</h4>

              <input
                type="name"
                placeholder="Enter your name"
                className="crest-input"
              ></input>

              <input
                type="Phone"
                placeholder="Enter your phone number"
                className="crest-input"
              ></input>

              <input
                type="email"
                placeholder="Enter your email"
                className="crest-input"
              ></input>

              <input
                type="message"
                placeholder="Message (Optional)"
                className="crest-input"
              ></input>

              <button type="submit" className="explor-btn">
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
)

export default Contact
