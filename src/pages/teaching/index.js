import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/teaching.module.css"
import Img from 'gatsby-image'
import Head from '../../components/Head'

export default function Teaching({ data }) {

  const projects = data.allMarkdownRemark.nodes;

  return (
    <>
    <Head title="Teaching"/>
    <Layout>
    <h2 className={styles.pageTitle}>Teaching</h2>
    <div className={styles.container}>
      {projects.map(project => (
        // <Link to={"/"} key={project.id}>
          <>
          <div className={styles.projectBlock}>
            <div className={styles.projectInfo}>
              { (project.frontmatter.github !== null )
                  ? <a className={ styles.projectTitle } href={ project.frontmatter.url_external } target="_blank" rel="noopener noreferrer">{ project.frontmatter.title }</a>
                  : <a className={ styles.projectTitleNoLink }>{ project.frontmatter.title }</a>
              }
              <h4 className={styles.journalTitle}>{ project.frontmatter.years }</h4>
              <h4 className={styles.collaborators}> { project.frontmatter.course_level }</h4>
              { project.frontmatter.github !== null &&
              <a className={ styles.github } href={ project.frontmatter.github } 
              target="_blank" rel="noopener noreferrer">
                <img src="/logo_github.svg"/>
              </a>
              }
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: project.html }} />
          </div>
          </>
        // </Link>
      ))}
    </div>
    </Layout>
    </>
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