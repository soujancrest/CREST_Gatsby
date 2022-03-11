import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Solution = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>This is solution page</h1>
    <p>Welcome to solution</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Solution
