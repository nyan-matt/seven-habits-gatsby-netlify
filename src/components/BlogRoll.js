import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-12 is-paddingless" key={post.id}>
              <article
                className="blog-list-item" 
              >
                <header>
                  <p className="post-meta">
                    <Link
                      className="post-headline is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span className="post-date is-size-7">{post.frontmatter.date}</span>
                    <div class="tags has-addons">
                      <span class="tag ">Habit</span>
                      <span class="tag is-primary">{post.frontmatter.habit}</span>
                    </div>
                  </p>
                </header>
                  <p className="is-size-7"> 
                    {post.excerpt}
                  </p>
                  <Link className="read-more is-size-7" to={post.fields.slug}>Read More</Link>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                habit
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
