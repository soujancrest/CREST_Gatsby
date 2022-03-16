import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

// import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.scss"
import "../styles/about.scss"

const Contact = () => (
  <Layout>
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
            <h3 className="contact-heading">Reach Out To Us</h3>
            <div className="crest-add">
              <h4>United States - HQ</h4>
              <ul>
                <li>
                  <StaticImage src="../images/location.png" alt="" />
                  <p>
                    UNITED STATES - HQ 700 12th Street, N.W. Suite 700 Washington DC -
                    20005.
                  </p>
                </li>
                <li>
                  <StaticImage src="../images/phone.png" alt="" />
                  <p>+1 202 344 9558</p>
                </li>
                <li>
                  <StaticImage src="../images/mail.png" alt="" />
                  <p>info@crest.eco</p>
                </li>
              </ul>



            </div>

            <div className="crest-add">
              <h4 className="contact-heading">India</h4>
              <ul>
                <li>
                  <StaticImage src="../images/location.png" alt="" />
                  <p>
                    5th Floor, Sri Vishnu Elite, Jayabheri Enclave, Gachibowli -
                    500034.
                  </p>
                </li>
                <li>
                  <StaticImage src="../images/phone.png" alt="" />
                  <p>+1 202 344 9558</p>
                </li>
                <li>
                  <StaticImage src="../images/mail.png" alt="" />
                  <p>info@crest.eco</p>
                </li>
              </ul>
            </div>


            <div className="crest-add">
              <h4 className="contact-heading">Singapore</h4>
              <ul>
                <li>
                  <StaticImage src="../images/location.png" alt="" />
                  <p>
                    1 Shenton Way, #10-04 Singapore - 068803.
                  </p>
                </li>
                <li>
                  <StaticImage src="../images/phone.png" alt="" />
                  <p>+65 9753 7487</p>
                </li>
                <li>
                  <StaticImage src="../images/mail.png" alt="" />
                  <p>info@crest.eco</p>
                </li>
              </ul>
            </div>


            <div className="crest-add">
              <h4 className="contact-heading">Australia</h4>
              <ul>
                <li>
                  <StaticImage src="../images/location.png" alt="" />
                  <p>
                    8 Brookside Dr, Wyndham Vale, VIC, Australia - 3024.
                  </p>
                </li>
                <li>
                  <StaticImage src="../images/phone.png" alt="" />
                  <p>+61 403983113</p>
                </li>
                <li>
                  <StaticImage src="../images/mail.png" alt="" />
                  <p>info@crest.eco</p>
                </li>
              </ul>
            </div>


          </Col>
          <Col class="col-lg-6 col-sm-12"> 
          <div className="crest-contact-form">

        
            <h4>Get In Touch</h4>
         
              <input type="name" placeholder="Enter your name" className="crest-input"></input>

              <input type="Phone" placeholder="Enter your phone number" className="crest-input"></input>

              <input type="email" placeholder="Enter your email" className="crest-input"></input>

              <input type="message" placeholder="Message (Optional)" className="crest-input"></input>

              <button type="submit" className="explor-btn">Submit</button>


            </div>
          </Col>
        </Row>
      </div>


    </Container>
  </Layout>
)

export default Contact
