import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="columns is-mobile is-centered">
        <div className="column is-8-desktop is-10-tablet is-10-mobile">
          <h2 className="section-heading">{title}</h2>
          <h3 className="section-heading is-size-3">{description}</h3>
          <div className="page-content size-4 ">
            <PageContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        content={post.html}
      />
    
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
