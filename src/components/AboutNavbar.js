import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
function AboutNavbar() {
    return (
        <div>
            <Container>
                <ul className="about-Tabs-list">
                    <li data-sal="slide-up" data-sal-duration="1000">
                        <Link to="/about" activeClassName="active">Overview</Link>
                    </li>
                    <li data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100"><Link to="/about/our-commitment" activeClassName="active">Commitment</Link></li>
                    <li data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200"><Link to="/about/our-hope" activeClassName="active">hope</Link></li>
                    <li data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300"><Link to="/about/people" activeClassName="active">people</Link></li>

                </ul>
            </Container>
        </div>
    )
}

export default AboutNavbar