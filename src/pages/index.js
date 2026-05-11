import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Head from "../components/Head"

const researchAreas = [
  "AI & Law",
  "Privacy",
  "Cybersecurity",
  "Empirical Legal Studies",
  "Computational Methods",
]

export default function Home({ data }) {
  const home = data.home.edges[0].node
  const recent = data.recent.nodes
  const headshotImage = data.headshot && getImage(data.headshot)

  return (
    <>
      <Head title="" />
      <Layout pageKey="home">
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.name}>
              Aniket Kesari
              <span className={styles.credentials}>JD, PhD</span>
            </h1>
            <p className={styles.role}>
              {home.frontmatter.jobTitle}, {home.frontmatter.employer}
            </p>
            <div
              className={styles.intro}
              dangerouslySetInnerHTML={{ __html: home.html }}
            />
            <div className={styles.areas}>
              {researchAreas.map(a => (
                <span key={a} className={styles.areaPill}>{a}</span>
              ))}
            </div>
            <div className={styles.quickLinks}>
              <Link to="/research">Research →</Link>
              <Link to="/teaching">Teaching →</Link>
              <Link to="https://github.com/Akesari12/Akesari12.github.io/raw/dev/Aniket_Kesari_CV.pdf">
                CV (PDF) →
              </Link>
              <a href="mailto:akesari@fordham.edu">Email →</a>
            </div>
          </div>
          {headshotImage && (
            <div className={styles.headshot}>
              <GatsbyImage
                image={headshotImage}
                className={styles.headshotImg}
                alt="Aniket Kesari"
              />
            </div>
          )}
        </section>

        <section className={styles.sectionPreview}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionPreviewTitle}>Recent Research</h2>
            <span className={styles.sectionMore}>
              <Link to="/research">All publications →</Link>
            </span>
          </div>
          <div className={styles.previewGrid}>
            {recent.map(project => {
              const thumbImage = project.frontmatter.thumb && getImage(project.frontmatter.thumb)
              const initial = project.frontmatter.title ? project.frontmatter.title.charAt(0) : "•"
              return (
                <article key={project.id} className={styles.previewCard}>
                  {thumbImage ? (
                    <div className={styles.previewThumb}>
                      <GatsbyImage
                        image={thumbImage}
                        alt=""
                        style={{ height: "100%" }}
                        imgStyle={{ objectFit: "cover" }}
                      />
                    </div>
                  ) : (
                    <div className={styles.previewThumbPlaceholder}>{initial}</div>
                  )}
                  <div className={styles.previewBody}>
                    <span className={styles.previewYear}>
                      {project.frontmatter.date.slice(0, 4)}
                    </span>
                    <a
                      className={styles.previewLink}
                      href={project.frontmatter.url_external || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.frontmatter.title}
                    </a>
                    {project.frontmatter.publication && (
                      <span className={styles.previewVenue}>
                        {project.frontmatter.publication}
                      </span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query HomeInfoQuery {
    headshot: file(relativePath: { eq: "images/headshot.png" }) {
      childImageSharp {
        gatsbyImageData(width: 280, placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    home: allMarkdownRemark(filter: { frontmatter: { title: { eq: "home" } } }) {
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
    recent: allMarkdownRemark(
      filter: { frontmatter: { publication: { ne: null } } }
      sort: { frontmatter: { date: DESC } }
      limit: 4
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          url_external
          publication
          thumb {
            childImageSharp {
              gatsbyImageData(width: 320, placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`
