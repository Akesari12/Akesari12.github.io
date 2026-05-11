import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/about.module.css"
import Head from '../components/Head'

const education = [
  {
    year: "2022",
    school: "Yale University",
    detail: "J.D., School of Law",
    logo: "/logo_yale.svg",
    logoClass: "logoYale",
    href: "https://law.yale.edu/",
  },
  {
    year: "2020",
    school: "UC Berkeley",
    detail: "Ph.D., Jurisprudence and Social Policy, School of Law",
    logo: "/logo_berkeley.svg",
    logoClass: "logoBerkeley",
    href: "https://www.law.berkeley.edu/",
  },
  {
    year: "2014",
    school: "Rutgers University",
    detail: "B.A., Political Science and History",
    logo: "/logo_rutgers.svg",
    logoClass: "logoRutgers",
    href: "https://newbrunswick.rutgers.edu/",
  },
]

const positions = [
  { period: "Present", title: "Associate Professor", org: "Fordham Law School" },
  { period: "2022–2024", title: "Postdoctoral Research Fellow", org: "NYU Information Law Institute" },
  { period: "2023", title: "Visiting Postdoc", org: "ETH Zurich, Center for Law and Economics" },
  { period: "2020–2022", title: "Postdoctoral Fellow", org: "UC Berkeley Social Science Data Lab (D-Lab)" },
  { period: "2018", title: "Technology Policy Intern", org: "GitHub" },
  { period: "2017", title: "Google Policy Fellow", org: "Engine" },
  { period: "2016", title: "Data Science for Social Good Fellow", org: "University of Chicago" },
]

export default function About({ data }) {
  const about = data.allMarkdownRemark.nodes[0]

  return (
    <>
      <Head title="About" />
      <Layout pageKey="about">
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>About</h1>
        </header>
        <div className={styles.container}>
          <div
            className={styles.bio}
            dangerouslySetInnerHTML={{ __html: about.html }}
          />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            {education.map(e => (
              <div key={e.year} className={styles.entry}>
                <div className={styles.logoWrap}>
                  <a href={e.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={e.logo}
                      alt={`${e.school} logo`}
                      className={`${styles.logo} ${styles[e.logoClass]}`}
                    />
                  </a>
                </div>
                <div className={styles.entryYear}>{e.year}</div>
                <div className={styles.entryBody}>
                  <div className={styles.entryPrimary}>{e.school}</div>
                  <div className={styles.entrySecondary}>{e.detail}</div>
                </div>
              </div>
            ))}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Positions</h2>
            {positions.map(p => (
              <div key={`${p.period}-${p.title}`} className={styles.entryNoLogo}>
                <div className={styles.entryYear}>{p.period}</div>
                <div className={styles.entryBody}>
                  <div className={styles.entryPrimary}>{p.title}</div>
                  <div className={styles.entrySecondary}>{p.org}</div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "about" } } }
    ) {
      nodes {
        frontmatter {
          jobTitle
          employer
        }
        html
        id
      }
    }
  }
`
