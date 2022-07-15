import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/teaching.module.css"
import Img from 'gatsby-image'

export default function Teaching({ data }) {

  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
    <h2 className={styles.pageTitle}>Teaching</h2>
    <div className={styles.container}>
      {projects.map(project => (
        // <Link to={"/"} key={project.id}>
          <>
          <div className={styles.projectBlock}>
            <div className={styles.projectInfo}>
              {/* <h3 className={styles.projectTitle}> */}
                <a className={ styles.projectTitle }
                  href={ project.frontmatter.url_external }
                  target="_blank" rel="noopener noreferrer">
                    { project.frontmatter.title }</a>
              {/* </h3> */}
              <h4 className={styles.journalTitle}>{ project.frontmatter.years }</h4>
              <h4 className={styles.collaborators}> { project.frontmatter.course_level }</h4>
              { project.frontmatter.github !== null &&
              <a className={ styles.github } href={ project.frontmatter.github } rel="noopener noreferrer">
                <img src="logo_github.svg"/>
              </a>
              }
            </div>
            {/* <h4 className={styles.pubDate}>{ project.frontmatter.years }</h4> */}
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: project.html }} />
          </div>
          {/* <div className={styles.expandButton}>
            <input type="checkbox" class={styles.defaultButton} id={ project.id } />
            <label class={styles.moreInfo} for={ project.id }>more info</label>
            <span className={styles.plusSign}>close</span>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: project.html }} />
          </div> */}
          </>
        // </Link>
      ))}
    </div>
    </Layout>
  )
}

export const query = graphql`
  query TeachingQuery {
    allMarkdownRemark(
      filter: {frontmatter: {course_level: {ne: null}}}
      sort: {order: ASC, fields: frontmatter___list_order}
    ) {
      nodes {
        frontmatter {
          title
          url_external
          course_level
          github
          years
          list_order
        }
        html
        id
      }
    }
  }
`