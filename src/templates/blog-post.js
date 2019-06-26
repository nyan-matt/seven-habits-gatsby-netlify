import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Pagination from '../components/Pagination';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  habit,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="columns is-mobile is-centered">
    <div className="column is-8-desktop is-10-tablet is-10-mobile">
      <h1 className="section-heading">{habit}</h1>
      <h2 className="section-heading">{title}</h2>
      <h3 className="section-heading is-size-3">{description}</h3>
      <div className="page-content size-4 ">
        <PostContent content={content} />
      </div>
      <Pagination />
    </div>
  </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  habit: PropTypes.string,
  helmet: PropTypes.object
}

const BlogPost = ({ data, location }) => {
  const { markdownRemark: post } = data

  return (
    
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        habit={post.frontmatter.habit}
      />
    
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        habit
        description
        tags
      }
    }
  }
`
