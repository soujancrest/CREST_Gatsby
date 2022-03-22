import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { Tabs } from "react-bootstrap"
import Tab from "react-bootstrap/Tab"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import styles from "../../styles/global.scss"
import AboutLayout from "../../components/AboutLayout"

import "../../styles/about.scss"

export default function About() {
  return (
    <Layout>
      <Seo title="About" />
      <AboutLayout />
      <div>
        <Container className="about-sub" id="vision">
          <h4 className="mission-heading mb-20">OUR VISION</h4>

          <div className="ab-overview">
            <div className="ab-img">
              <StaticImage
                src="../../images/about/vision.png"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="ab-content">
              <h4>Energy Positive Cities and Global Cooling</h4>
              <br></br>
              <p>
                To meet the 2050 net-zero emission goals, CREST Foundation
                intends to create energy-positive communities that produce clean
                energy from renewable resources and facilitate zero maintenance
                and zero waste living.
              </p>
              <p>
                60% of the world’s population will live in cities by 2030.
                Buildings consume a lot of energy and, together with the
                construction industry, contribute to 40% of the world’s carbon
                dioxide emissions. As wildfires, hurricanes, and other dramatic
                climatic events become the norm, establishing baseline data to
                track climate change becomes vital.
              </p>
            </div>
          </div>
          <div className="ab-main-con">
            <p>
              Today, it’s easier and more convenient for people to work and live
              in air-conditioned homes and offices. These closed-door living
              situations increase exposure to indoor air pollutants, which is
              unhealthy in the long run.
            </p>
            <p>
              When plants transpire, they cool the air around and beneath them.
              Increasing herbal forest density and clean energy reliance
              facilitates global cooling. Cooling temperatures reduce wildfire
              footprints and air conditioner dependence in the summer months.
              When fewer chlorofluorocarbons are released and more carbon
              monoxide is absorbed, the planet goes into a virtuous cycle of
              global cooling.
            </p>
          </div>
        </Container>
        <Container className="about-sub" id="mission">
          <h4 className="mission-heading mb-20">OUR MISSION</h4>

          <div className="ab-overview">
            <div className="ab-img">
              <StaticImage
                src="../../images/about/1.png"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="ab-content">
              <p>
                CREST Foundation is on a mission to build 20 self-sufficient
                Climate Hubs over the next ten years. Each Climate Hub will
                consist of 600 eco-homes, 500 acres of organic farms, food
                forests, and herbal gardens, an organic shopping market,
                corporate offices, green schools, a sports and entertainment
                village featuring 64 varieties of sports, a community kitchen,
                and a preventive care and wellness health centre
              </p>
              <p>
                Our practical approach is neither theoretical nor challenging to
                implement. The Foundation’s first publication, Blue Dharma, is a
                playbook of sustainable practices that have successfully powered
                the creation of the world’s first energy-positive,
                water-positive, and collective organic farming community.
              </p>
            </div>
          </div>
          <div className="ab-main-con">
            <p>
              We have the proof of concept to build carbon-pollution-free
              communities that promote sustainable living (without compromising
              on the perks of modern lifestyles) and revive natural ecosystems
              while combating the most urgent changes of the climate crisis.
            </p>
            <p>
              Our all-inclusive approach to each strand of sustainability — air,
              water, food, soil, shelter, energy, and people — will
              fundamentally transform the urban lifestyle. Each self-sufficient
              climate hub will produce sustainably farmed organic food, generate
              clean energy from renewable resources, improve air quality,
              recharge the deep aquifer, restore soil health, support animal
              health, and nurture biodiversity.
            </p>
            <p>
              This fiscally responsible high-impact initiative is built on a
              consistent, sustained growth model and is guaranteed to yield
              results. CREST Foundation is seeking to raise $100 million for the
              first demonstration project. The Foundation has a 12-year roadmap
              to grow its revenue to $1.78 billion, create 620,000 jobs,
              generate 820 MW of clean energy, and produce 6.28 million metric
              tons of organic food.
            </p>
          </div>
        </Container>
        <Container className="about-sub" id="ethos">
          <h4 className="mission-heading mb-20">OUR ETHOS</h4>

          <div className="ab-overview">
            <div className="ab-img">
              <StaticImage
                src="../../images/about/ethos.png"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="ab-content">
              <h4>Human Wellbeing Can Save the Planet</h4>
              <br></br>
              <p>
                CREST Foundation will create climate-resilient eco-habitats that
                combine the luxuries of modern life with the benefits of living
                in nature. These energy-efficient homes will usher in a new age
                of climate adaptation and resilience, providing residents access
                to safe drinking water, fresh air, and farm fresh witnessed
                organic food
              </p>
              <p>
                Over the last decade, many mega cities have transformed into
                urban heat islands. City residents breathe polluted air,
                continuous exposure to which can lead to a dip in immunity and a
                surge in respiratory illnesses
              </p>
            </div>
          </div>
          <div className="ab-main-con">
            <p>
              Planted palettes of oxygenating trees clean and cool the air by
              accelerating the absorption of greenhouse gases from the
              atmosphere. Cultivating agroforestry and herb gardens provides
              witnessed organic farm-fresh food and helps bring back
              biodiversity to urbanized areas.
            </p>
            <p>
              Implementing mechanical ventilation techniques in mixed use and
              residential developments improves ventilation, thereby improving
              indoor air quality
            </p>
          </div>
        </Container>
        <Container className="about-sub" id="intention">
          <h4 className="mission-heading mb-20">OUR INTENTION</h4>

          <div className="ab-overview">
            <div className="ab-img">
              <StaticImage
                src="../../images/about/intenton.png"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="ab-content">
              <h4>Supply Chains and Carbon Footprints</h4>
              <br></br>
              <p>
                CREST Foundation aims to reduce the global carbon footprint by
                establishing Climate Hubs. CREST Foundation will transform the
                global agricultural landscape by nurturing forest ecosystems and
                agroforestry, investing in sustainable agricultural research
                facilities, promoting innovations in nutritional security, and
                fuelling sustained economic growth.
              </p>
            </div>
          </div>

          <div className="ab-main-con">
            <p>
              Processed foods and global food supply chains have large carbon
              footprints. Produce that’s farmed with fertilizers and pesticides
              has a longer shelf-life but is of lower nutritional value.
              Consuming food with additives and preservatives is harmful, and
              organic food products remain expensive to produce and consume.
            </p>
            <p>
              By relying more on local farms, circular bio-economies become less
              vulnerable to global supply chain breakdowns. In bio-economies,
              food is managed in innovative ways. Food waste is converted back
              into energy and excess food is funneled into organic food
              processing plants.
            </p>
            <p>
              Easy availability of nutritious, farm-fresh food also decreases
              reliance on takeout food and reduces waste from takeout packaging.
              Most importantly, these circular microeconomies contribute to a
              reduction in food miles, thereby decarbonizing the earth.
            </p>
            <p>
              Micro-economies can bolster and support other aspects of the
              economy besides food production. Providing rural citizens with the
              same healthcare, education, and employment opportunities usually
              limited to cities dissuades mass-migration to urban areas and
              decreases infrastructure and transportation needs
            </p>
          </div>
        </Container>

        {/* share  */}
        {/* <Container>
          <div className="share-details">
            <h4>Share this page:</h4>
            <ul>
              <li>
                <StaticImage src="../../images/facebook-darks.png" alt="" />
                <span>Facebook</span>
              </li>
              <li>
                <StaticImage src="../../images/twitter-dark.png" alt="" />
                <span>Twitter</span>
              </li>
            </ul>
          </div>
        </Container> */}
      </div>
    </Layout>
  )
}
