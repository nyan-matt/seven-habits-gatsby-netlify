import React from 'react'


import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <section className="section" style={{'marginTop':'220px'}}>
        <div className="columns is-mobile is-centered">
          <div className="column is-8-desktop is-10-tablet is-10-mobile">
            <h2 className="section-heading">Blog</h2>
            <h3 className="section-heading is-size-3">Latest Blog entries</h3>
            
              <BlogRoll />
            
          </div>
        </div>
      </section>
    )
  }
}
