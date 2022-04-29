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
      padding: `2rem 0`,
      color: `#ffffff`,
      marginTop: "2rem",
    }}
  >
    <Container>
      <Row>
        <Col className="col-lg-4 col-12">
          <div className="footer-logos">
            <div
              className="crest-logo-left"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              <StaticImage src="../images/CREST_White_Logo.png" />
            </div>

            <div
              className="crest-logo-bot"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="100"
            >
              <StaticImage src="../images/us-green.png" />
            </div>
          </div>
        </Col>
        <Col className="col-lg-8 col-12">
          <div className="crest-footer-dis">
            <div className="crest-add">
              <address data-sal="slide-up" data-sal-duration="1000">
                <h6>
                  UNITED STATE-HQ <span>:</span>
                </h6>

                <p>
                  <span>:</span> 700 12th Street, N.W. , Suite 700, Washington
                  DC - 20005.
                  <a href="tel:+12023449558"> Phone :+1 202 344 9558</a>
                </p>
              </address>
              <address
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <h6>
                  INDIA <span>:</span>
                </h6>

                <p>
                  <span>:</span> Sri Vishnu Elite, 5th floor, Jayabheri Enclave,
                  Gachibowli, Hyderabad - 500032.
                  <a href="tel:+919866657462"> Phone :+91 98666 57462</a>
                </p>
              </address>
              <address
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="200"
              >
                <h6>
                  SINGAPORE <span>:</span>
                </h6>
                <p>
                  <span>:</span> 1 Shenton Way, #10-04, Singapore - 068803.
                  <a href="tel:+6597537487"> Phone :+65 9753 7487</a>
                </p>
              </address>
              <address
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                <h6>
                  {" "}
                  AUSTRALIA <span>:</span>
                </h6>
                <p>
                  <span>:</span> 8 Brookside Dr, Wyndham Vale, VIC, Australia -
                  3024.
                  <a href="tel:+61403983113"> Phone :+61 403983113</a>
                </p>
              </address>
            </div>

            <div
              className="crest-media"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              <Link
                to="https://www.instagram.com/crestfoundation/"
                target={"_blank"}
              >
                <StaticImage src="../images/instagram_icon.png" />
              </Link>
              <Link
                to="https://www.facebook.com/CREST-Foundation-106024431983601"
                target={"_blank"}
              >
                <StaticImage src="../images/facebook_icon.png" />
              </Link>
              <Link to="https://twitter.com/CRESTFoun17" target={"_blank"}>
                <StaticImage src="../images/Dark_Blue.png" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/crest-foundation"
                target={"_blank"}
              >
                <StaticImage src="../images/linkedin_icon.png" />
              </Link>
            </div>

            <div className="crest-copy">
              <p
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                All rights are reserved to crest foundation
              </p>

              <p
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                Privacy & Policy
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
