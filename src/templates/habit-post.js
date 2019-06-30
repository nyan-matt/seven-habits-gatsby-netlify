import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Pagination from '../components/Pagination';
import { Fragment } from 'react';
import { Link } from 'gatsby'

export const HabitPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  habit,
  helmet,
  related
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <div className="columns is-mobile is-centered">
        <div className="column is-8-desktop is-10-tablet is-10-mobile">
          <h1 className="section-heading">{habit}</h1>
          <h2 className="section-heading">{title}</h2>
          <h3 className="section-heading is-size-3">{description}</h3>
          <div className="page-content size-4 ">
            <PostContent content={content} />
          </div>
          <Pagination />
          { related && related.length > 0 ?
            <Fragment>
            <h3 className="related">Habit {habit} in action...</h3>
            
              {related.map((item, index) => 
                <div className="column related" key={index}>
                  <h4><Link to={item.node.fields.slug}>{item.node.frontmatter.title}</Link></h4>
                  <h5>{item.node.frontmatter.description}</h5>
                  <PostContent className="" content={item.node.excerpt} />
                </div>
                )}
            
            </Fragment> 
          : 
          ''
          }
        </div>
      </div>
    </section>
  )
}

HabitPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  habit: PropTypes.string,
  helmet: PropTypes.object,
  related: PropTypes.array
}

const HabitPost = ({ data, location }) => {
  const { markdownRemark: post, allMarkdownRemark: related } = data

  return (
    
      <HabitPostTemplate
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
        related={related.edges}
      />
    
  )
}

HabitPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.object
  }),
}

export default HabitPost

export const pageQuery = graphql`
  query HabitPostByID($id: String!, $habit: String!) {
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
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}, habit: {eq: $habit}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
          html
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
