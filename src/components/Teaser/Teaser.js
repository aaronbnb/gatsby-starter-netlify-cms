import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import '../all.sass'
import teaserStyle from "./teaser.module.css"

const Teaser = ({ children }) => (
  <StaticQuery
    query={graphql`
      query TeaserSectionQuery {
          site {
            siteMetadata {
              description,
              headline,
            }
          }
        }
    `}
    render={data => (
        <section>
            <div id={teaserStyle.big}>
                <div id={teaserStyle.pattern}> 
                    <div id={teaserStyle.patternoverlay}></div>
                </div>
               
                <div id={teaserStyle.teaser}>
                    <div>
                        <p className={teaserStyle.header}> 
                        <strong>I help organizations create inclusive online experiences and achieve accessibility compliance goals.</strong> 
                        </p>
                        <p className={teaserStyle.header}>
                        I'm an IAAP-certified Web Accessibility Specialist and Technology Director at <a href="https://beaccessible.com" rel="noopener noreferrer" className={teaserStyle.link}>Be Accessible</a>. I identify accessibility challenges and potential legal risks in the design of our clients' websites, and provide recommended fixes. I've handled development for WordPress, Shopify, and even custom React applications. 
                        </p>
                    </div>
                    <br></br> 
                    <div>
                        <p className={teaserStyle.header}>
                        <strong>I teach web development and cyber security, helping tens of students learn to build an accessible, secure internet, and shift careers into technology - just like I did.</strong> 
                        </p>
                        <p className={teaserStyle.header}>
                        I serve as a Teaching Assistant for the Cyber Security program at <a href="https://bootcamp.uclaextension.edu/" rel="noopener noreferrer" className={teaserStyle.link}>UCLA Extension</a>. I run free workshops, training technology professionals how to build applications that support the broadest circle of people, particularly those that rely on assistive technology.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )}
  />
)

export default Teaser