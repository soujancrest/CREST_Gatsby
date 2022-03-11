import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

// import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
// import "./global.css"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <Container>
      <Row>
        <Col>
          <h2>CONTACT US</h2>
          <h3>
            We’re here to help and answer any question you might have. We look
            forward to hearing from you.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Reach Out To Us</h3>
          <div>
            <h4>United States - HQ</h4>
            <p>
              UNITED STATES - HQ 700 12th Street, N.W. Suite 700 Washington DC -
              20005.
            </p>
            <p>+1 202 344 9558</p>
            <p>info@crest.eco</p>
          </div>
          <div>
            <h4>India</h4>
            <p>
              5th Floor, Sri Vishnu Elite, Jayabheri Enclave, Gachibowli -
              500034.
            </p>
            <p>+1 202 344 9558</p>
            <p>info@crest.eco</p>
          </div>
          <div>
            <h4>Singapore</h4>
            <p>1 Shenton Way, #10-04 Singapore - 068803.</p>
            <p>+65 9753 7487</p>
            <p>info@crest.eco</p>
          </div>
          <div>
            <h4>Australia</h4>
            <p>8 Brookside Dr, Wyndham Vale, VIC, Australia - 3024.</p>
            <p>+61 403983113</p>
            <p>info@crest.eco</p>
          </div>
        </Col>
        <Col>
          <h4>Get In Touch</h4>
          <input type="name" placeholder="Enter your name"></input>
          <br />
          <input type="Phone" placeholder="Enter your phone number"></input>
          <br />
          <input type="email" placeholder="Enter your email"></input>
          <br />
          <input type="message" placeholder="Message (Optional)"></input>
          <br />
          <button type="submit">Submit</button>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Contact
