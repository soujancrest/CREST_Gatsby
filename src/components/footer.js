import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
import "./main.scss"

const Footer = () => (
    // <footer
    //     style={{
    //         background: `#595757`,
    //         display: 'flex',
    //     }}
    // >
    //     <div
    //         style={{
    //             margin: `0 auto`,
    //             maxWidth: 1450,
    //             padding: `3rem 0rem`,
    //         }}
    //     >
    //         <div>
    //         <StaticImage
    //             src="../images/CREST_White_Logo.png"
    //             width={300}
    //             quality={95}
    //             formats={["auto", "webp", "avif"]}
    //             alt="A Gatsby astronaut"
    //             style={{ marginBottom: `1.45rem` }}
    //         />
    //         </div>
    //         <div>
    //         <p style={{ margin: 0 }}>
    //             <Link
    //                 to="/"
    //                 style={{
    //                     color: `white`,
    //                     textDecoration: `none`,
    //                 }}
    //             >
    //                 About us
    //             </Link>
    //             <Link to="/using-typescript/"></Link> <br />
    //             <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
    //             <Link to="/using-dsg">Go to "Using DSG"</Link>
    //         </p>
    //         </div>
    //     </div>
    // </footer>

    <footer style={{
        background: `#595757`,
        display: 'flex',
        padding: `4rem 0`,
        color: `#ffffff`,
    }}>
        <Container>
            <Row>
                <Col className="col-2" id="footer-col-1">
                    <Link className="link" to="/">
                        <StaticImage src="../images/Crest-Logo.png" /></Link>
                    <div className="footer-copy">
                        <div className="footer-contact">
                            <p>Connect with us
                                
                            </p>
                            <Link to="/"><StaticImage src="../images/instagram_icon.png" /></Link>
                            <Link to="/"><StaticImage src="../images/facebook_icon.png" /></Link>
                            <Link to="/"><StaticImage src="../images/Dark_Blue.png" /></Link>
                            <Link to="/"><StaticImage src="../images/linkedin_icon.png" /></Link>
                                
                        </div>
                        <div className="footer-contact">
                            <p>Privacy & Policy

                            </p>
                            <p>
                                Terms & Conditions
                            </p>
                        </div>
                        <div className="footer-contact">
                            <p>All rights are reserved to crest foundation

                            </p>
                
                        </div>
                    </div>


                </Col>
                <Col className="col-1" id="footer-col-2">
                    <h4>About Us</h4>
                    <p>Our Mission</p>
                    <p>Our Impact</p>
                    <p>Our Team</p>
                    <p>Our Blog</p>
                    <p>Contact Us</p>
                </Col>
                <Col className="col-2" id="footer-col-3">
                    <h4>Climate Action</h4>
                    <p><Link className="link" to="/library.js">Library</Link></p>
                    <p><Link className="link" to="#">Report</Link></p>
                    <p><Link className="link" to="#">Webinar</Link></p>
                    <p><Link className="link" to="#">Publication</Link></p>
                    <p><Link className="link" to="#">Download the Book</Link></p>
                </Col>
                <Col className="col-2" id="footer-col-4">
                    <h4>Focus Area</h4>
                    <p><Link className="link" to="#">Circular Economy</Link></p>
                    <p><Link className="link" to="#">Carbon Neutrality</Link></p>
                    <p><Link className="link" to="#">DeUrbanisation</Link></p>
                    <p><Link className="link" to="#">Forest Migration</Link></p>
                </Col>
                <Col className="col-2" id="footer-col-5">
                    <h4>Quick Links</h4>
                    <p><Link className="link" to="#">"Eco"nomic Model</Link></p>
                    <p><Link className="link" to="#">Solution Framework</Link></p>
                    <p><Link className="link" to="#">Responsible Living</Link></p>
                </Col>
                <Col className="col-3" id="footer-col-6">
                    <div className="footer-address">
                        <h4>Regions</h4>
                        <p>UNITED STATES - HQ 700 12th Street, N.W. ,
                            Suite 700 Washington DC 20005 +1 202
                            344 9558</p>
                        <p>CREST Foundation Sri Vishnu Elite 5th
                            floor Jayabheri Enclave II Gachibowli
                            Hyderabad 500032</p>
                        <p>SINGAPORE 1 Shenton Way, #10-04
                            Singapore 068803 +65 9753 7487</p>
                        <p>AUSTRALIA 8 Brookside Dr, Wyndham Vale,
                            VIC, Australia - 3024 +61 403983113</p>

                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)


export default Footer
