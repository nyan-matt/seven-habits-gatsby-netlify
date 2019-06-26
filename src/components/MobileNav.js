import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'


class MobileNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
  // toggle the active boolean in the state
    this.setState(
      {
      active: !this.state.active,
      },
      // after state has been updated,
      () => {
      // set the class in state for the navbar accordingly
      this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
          })
          : this.setState({
              navBarActiveClass: '',
          })
      }
    )
  }  
    render() {
    const { data } = this.props
    const { nodes: posts } = data.allMarkdownRemark
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger is-visible-desktop ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start is-hidden-desktop">
              <Link className="navbar-item" activeClassName="active" to="/">/ - Home</Link>
              {posts &&
              posts.map((post, index) => (    
                <Link key={index} className="navbar-item" activeClassName="is-active" to={post.fields.slug}>{`0${index + 1} - ${post.frontmatter.title}`}</Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

MobileNav.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query MobileNavQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, sort: {fields: fields___slug}) {
            nodes {
              fields {
                slug
              }
              frontmatter {
                  title
              }
            }
          }
        }
    `}
    render={(data) => <MobileNav data={data} />}
  />
)
