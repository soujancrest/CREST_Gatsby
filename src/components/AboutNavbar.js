import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
function AboutNavbar() {
    return (
        <div>
            <Container>
                <ul className="about-Tabs-list">
                    <li >
                        <Link  to="/about" activeClassName="active">Overview</Link>
                    </li>
                    <li ><Link to="/about/our-commitment" activeClassName="active">Commitment</Link></li>
                    <li><Link to="/about/our-hope" activeClassName="active">hope</Link></li>
                    <li><Link to="/about/people" activeClassName="active">people</Link></li>

                </ul>
            </Container>
        </div>
    )
}

export default AboutNavbar