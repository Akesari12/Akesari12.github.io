import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/research.module.css"
import Img from 'gatsby-image'
import Head from '../../components/Head'

export default function Research({ data }) {

  // console.log(data);
  const projects = data.allMarkdownRemark.nodes;

  // console.log(projects, projects[0].frontmatter.date)

  return (
    <>
    <Head title="Research"/>
    <Layout>
    <h2 className={styles.pageTitle}>Research</h2>
    <div className={styles.container}>
      {projects.map(project => (
        // <Link to={"/"} key={project.id}>
          <>
          <div className={styles.projectBlock}>
            {/* <div className={styles.projectImage}> */}
              {project.frontmatter.thumb !== null &&
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} className={styles.projectImage}/>
              }
            {/* </div> */}
            <div className={styles.projectInfo}>
              {/* <h3 className={styles.projectTitle}> */}
                <a className={styles.projectTitle}
                  href={project.frontmatter.url_external}
                  target="_blank" rel="noopener noreferrer">
                    { project.frontmatter.title }</a>
              {/* </h3> */}
              {project.frontmatter.collab !== null &&
                <h4 className={styles.collaborators}>in collaboration with { project.frontmatter.collab}</h4>
              }
              <h4 className={styles.journalTitle}>{ project.frontmatter.publication }</h4>
              <h4 className={styles.pubDate}>{ project.frontmatter.date.slice(0,4) }</h4>
            </div>
          </div>
          <div className={styles.expandButton}>
            <input type="checkbox" class={styles.defaultButton} id={ project.id } />
            <label class={styles.moreInfo} for={ project.id }>more info</label>
            <span className={styles.plusSign}>close</span>
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
  query ResearchQuery {
    allMarkdownRemark(
      filter: {frontmatter: {publication: {ne: null}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          collab
          date
          publication
          title
          url_external
          youtube
          youtube_alt
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
        id
      }
    }
  }
`