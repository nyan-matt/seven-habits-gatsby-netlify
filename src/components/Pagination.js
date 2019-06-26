import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'


class Pagination extends React.Component {
  render() {
    const { data } = this.props
    const { nodes: posts } = data.allMarkdownRemark
    return (
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
          <ul className="pagination-list">
            {posts &&
            posts.map((post, index) => (
                <li key={post.fields.slug}>
                    <Link className="pagination-link" activeClassName="is-current" title={post.frontmatter.title} to={post.fields.slug}>{`0${index + 1}`}</Link>
                </li>
            ))}
          </ul>
      </nav>
    )
  }
}

Pagination.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PaginationQuery {
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
    render={(data) => <Pagination data={data} />}
  />
)
