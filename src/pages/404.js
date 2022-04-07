import * as React from "react"
import Notfound from "../components/Notfound"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <div>
    <Seo title="404: Not found" />
    <Notfound/>
  </div>
)

export default NotFoundPage
