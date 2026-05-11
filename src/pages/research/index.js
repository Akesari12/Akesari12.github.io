import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'
import * as styles from "../../styles/research.module.css"
import Head from '../../components/Head'

function groupByYear(projects) {
  const groups = {}
  projects.forEach(p => {
    const year = p.frontmatter.date.slice(0, 4)
    if (!groups[year]) groups[year] = []
    groups[year].push(p)
  })
  return Object.keys(groups)
    .sort((a, b) => b.localeCompare(a))
    .map(year => ({ year, items: groups[year] }))
}

export default function Research({ data }) {
  const projects = data.allMarkdownRemark.nodes
  const grouped = groupByYear(projects)

  return (
    <>
      <Head title="Research" />
      <Layout>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Research</h1>
          <p className={styles.pageLede}>
            Selected publications and working papers. Click a title to read the
            paper.
          </p>
        </header>
        <div className={styles.container}>
          {grouped.map(({ year, items }) => (
            <section key={year} className={styles.yearGroup}>
              <h2 className={styles.yearHeading}>{year}</h2>
              {items.map(project => {
                const hasThumb = project.frontmatter.thumb && project.frontmatter.thumb.childImageSharp
                return (
                  <article
                    key={project.id}
                    className={hasThumb ? styles.entry : styles.entryNoThumb}
                  >
                    {hasThumb && (
                      <div className={styles.thumb}>
                        <Img
                          fluid={project.frontmatter.thumb.childImageSharp.fluid}
                          alt=""
                          style={{ height: "100%" }}
                          imgStyle={{ objectFit: "cover" }}
                        />
                      </div>
                    )}
                    <div className={styles.entryBody}>
                      <a
                        className={styles.entryTitle}
                        href={project.frontmatter.url_external || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.frontmatter.title}
                      </a>
                      <div className={styles.entryMeta}>
                        {project.frontmatter.publication && (
                          <span className={styles.entryVenue}>
                            {project.frontmatter.publication}
                          </span>
                        )}
                        {project.frontmatter.collab && (
                          <span className={styles.entryCollab}>
                            {" "}· with {project.frontmatter.collab}
                          </span>
                        )}
                      </div>
                      {project.html && project.html.trim() && (
                        <>
                          <input
                            type="checkbox"
                            id={`abstract-${project.id}`}
                            className={styles.toggle}
                          />
                          <label
                            htmlFor={`abstract-${project.id}`}
                            className={styles.toggleLabel}
                            aria-label="Toggle abstract"
                          />
                          <div
                            className={styles.entryAbstract}
                            dangerouslySetInnerHTML={{ __html: project.html }}
                          />
                        </>
                      )}
                    </div>
                  </article>
                )
              })}
            </section>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ResearchQuery {
    allMarkdownRemark(
      filter: { frontmatter: { publication: { ne: null } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          collab
          date
          publication
          title
          url_external
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
