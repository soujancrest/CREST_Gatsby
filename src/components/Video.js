import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const video = () => (
  // <ModalRoutingContext.Consumer>
  //   {({ modal, closeTo }) => (
  //     <div>
  //       {modal ? (
  //         <Link to={closeTo}>
  //           Close
  //         </Link>
  //       ) : (
  //         <header>
  //           <h1>
  //             Website Title
  //           </h1>
  //         </header>
  //       )}

  //       <h2>Modal Page</h2>

  //       <Link to="/">Go back to the homepage</Link>
  //     </div>
  //   )}
  // </ModalRoutingContext.Consumer>

  <div className='crest-video'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-lwCneFPQwo?controls=0&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
)

export default video