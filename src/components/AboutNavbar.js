import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
function AboutNavbar() {
    return (
        <div>
            <Container>
                <ul className="about-Tabs-list">
                    <li className="active">
                        <Link to="/about">Overview</Link>
                    </li>
                    <li><Link to="/about/our-commitment">Commitment</Link></li>
                    <li><Link to="/about/our-hope">hope</Link></li>
                    <li><Link to="/about/people">people</Link></li>

                </ul>
            </Container>
        </div>
    )
}

export default AboutNavbar