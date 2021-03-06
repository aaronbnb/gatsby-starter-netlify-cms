import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero/Hero'
import Teaser from '../components/Teaser/Teaser'
import AuditSection from '../components/AuditSection/AuditSection'
import WorkshopSection from '../components/WorkshopSection/WorkshopSection'


export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

  //   <Section
  //   emphasis="I run acccessibility workshops" 
  //   heading=", teaching developers how to build applications 
  //   that support the broadest circle of people"
  //   linkText="View Full Workshop Schedule"
  //   destination="products"
  //   id="1"
  //   mainColor="#001F3F"
  //   textColor="#f7f7f7"
  // />
 


    return (
      <Layout>
        <Hero />
        <Teaser />
  
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
        }
      }
    }
  }
`
{/* <AuditSection
emphasis="I teach web development and cyber security " 
heading="at UCLA Extension. I’ve helped tens of students 
change careers into technology. Just like I did."
linkText="View Full Workshop Schedule"
destination="products"
id="1"
mainColor="#001F3F"
textColor="#f7f7f7"
/>
<WorkshopSection
emphasis="I teach web development and cyber security " 
heading="at UCLA Extension. I’ve helped tens of students 
change careers into technology. Just like I did."
linkText="View Full Workshop Schedule"
destination="products"
id="1"
mainColor="#001F3F"
textColor="#f7f7f7"
/> */}