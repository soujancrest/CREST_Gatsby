import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Context = () => (
  <Layout>
    <Seo title="Context" />
    <h1>Hi from Context</h1>
    <p>Welcome to Context page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Context
