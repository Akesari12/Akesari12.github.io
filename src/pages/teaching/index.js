import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/teaching.module.css"
import Head from '../../components/Head'

export default function Teaching({ data }) {
  const courses = data.allMarkdownRemark.nodes

  return (
    <>
      <Head title="Teaching" />
      <Layout>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Teaching</h1>
          <p className={styles.pageLede}>
            Law, graduate, and undergraduate courses taught at Fordham, Berkeley, and elsewhere.
          </p>
        </header>
        <div className={styles.container}>
          {courses.map(course => {
            const { title, years, course_level, url_external, github } = course.frontmatter
            return (
              <article key={course.id} className={styles.entry}>
                <div className={styles.entryYears}>{years}</div>
                <div className={styles.entryBody}>
                  <div className={styles.entryTopRow}>
                    {url_external ? (
                      <a
                        className={styles.entryTitle}
                        href={url_external}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                    ) : (
                      <span className={styles.entryTitleNoLink}>{title}</span>
                    )}
                    {course_level && (
                      <span className={styles.levelBadge}>{course_level}</span>
                    )}
                  </div>
                  {course.html && course.html.trim() && (
                    <div
                      className={styles.entryDesc}
                      dangerouslySetInnerHTML={{ __html: course.html }}
                    />
                  )}
                  {github && (
                    <div className={styles.entryLinks}>
                      <a href={github} target="_blank" rel="noopener noreferrer">
                        GitHub repository →
                      </a>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query TeachingQuery {
    allMarkdownRemark(
      filter: { frontmatter: { course_level: { ne: null } } }
      sort: { order: ASC, fields: frontmatter___list_order }
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
