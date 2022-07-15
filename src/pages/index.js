import { graphql, Link } from "gatsby"
import React , { useState, createContext } from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"

export default function Home({data}) {
  const queryData = data.allMarkdownRemark.edges[0].node;
  const homeDescription = (queryData.html).slice(3,-4);
  
  return (
    <Layout pageKey={'home'}>
    <section className={styles.header}>
        <div className={styles.homeTitle}>
          <h2>Aniket Kesari <span className={styles.credentials}>J.D., Ph.D.</span></h2>
          <span className={styles.jobTitle}>
            {queryData.frontmatter.jobTitle}<br/>
            {queryData.frontmatter.employer}
          </span>
          <button className={styles.homeImage}>
            <Link to="/about">
              <Img fluid={data.file.childImageSharp.fluid} style={{ borderRadius: '20px'}}/>
            </Link>
          </button>
          {/* <h3>Hello! I am currently a Research Fellow at the NYU <a className={styles.homeLinks} href="https://www.law.nyu.edu/centers/ili">INFORMATION LAW INSTITUTE</a>. Please check out my current research projects and designed courses!</h3>  */}
          <div className={styles.insertedHtml} dangerouslySetInnerHTML={{ __html: queryData.html }} />
        </div>
        {/* <p>helloooooo</p> */}
    </section>
    </Layout>
  )
}

export const query = graphql`
query HomeInfoQuery {
  file(childImageSharp: {fluid: {}}, relativePath: {eq: "images/headshot.png"}) {
    id
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "home"}}}) {
    edges {
      node {
        frontmatter {
          jobTitle
          employer
        }
        html
      }
    }
  }
}
`