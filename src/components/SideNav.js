import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { FaHome, FaInfoCircle }  from 'react-icons/fa'

class SideNav extends React.Component {
  render() {
    const { data } = this.props
    const { nodes: posts } = data.allMarkdownRemark
    return (
      <div className="side-nav">
      <div className="nav-items">
        <Link activeClassName="active" to="/"><FaHome /></Link>
            {posts &&
            posts.map((post, index) => (    
              <Link key={index} activeClassName="active" title={post.frontmatter.title} to={post.fields.slug}>{`0${index + 1}`}</Link>
            ))}
        <Link activeClassName="active" to="/about" style={{position: 'absolute', bottom:'0', margin: '8px 18px'}}>
          <FaInfoCircle  />
        </Link>
          </div>
      </div>
    )
  }
}

SideNav.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SideNavQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "habit-post"}}}, sort: {fields: fields___slug}) {
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
    render={(data) => <SideNav data={data} />}
  />
)
