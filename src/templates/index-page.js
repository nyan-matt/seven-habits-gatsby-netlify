import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Pagination from '../components/Pagination';

export const IndexPageTemplate = ({
  title,
  content,
  description,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="columns is-mobile is-centered">
      <div className="column is-8-desktop is-10-tablet is-10-mobile">
        <h2 className="section-heading"> {title}</h2>
        
        <h3 className="section-heading is-size-3">{description}</h3>
        <div className="page-content size-4 ">
          <PageContent content={content} />
        </div>
        <Pagination />
        
      </div>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    
      <IndexPageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        content={post.html}
        contentComponent={HTMLContent}
      />
    
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
      description
    }
  }
}
`
