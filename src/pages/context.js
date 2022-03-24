import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Context = () => (
  <div>
    <Seo title="Context" />
    <h1>Hi from Context</h1>
    <p>Welcome to Context page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Context
