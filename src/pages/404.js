import React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  
  <section className="section">
    <div className="columns is-mobile is-centered">
      <div className="column is-8-desktop is-10-tablet is-10-mobile">
        <h1 className="section-heading">404</h1>
        <h2 className="section-heading">Page not found</h2>
        <h3 className="section-heading is-size-3">Ooops. Sorry about that.</h3>
        <div className="page-content size-4 ">
          <p>
            Not sure how that happened, we couldn't find the page you wanted. 
            Try going back to the <Link className="" to="/">home</Link> page. 
          </p>
        </div>
      </div>
    </div>
  </section>
  
)

export default NotFoundPage
