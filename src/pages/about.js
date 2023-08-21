import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/about.module.css"
import Img from 'gatsby-image'
import Head from '../components/Head'

export default function About({ data } ) {
  
  const queryAbout = data.allMarkdownRemark.nodes[0];

  return (
    <>
    <Head title="About"/>
    <Layout pageKey={'about'}>
          <h2 className={styles.pageTitle}>About</h2>
    <div>
        {/* <h2>About Ani</h2> */}
        {/* <h3>Education</h3> */}
        <div className={ styles.jobs }>
          <div className={styles.gradIcon}>school</div>
            <div className={styles.timeline}>
            <div className={styles.schools}>
                <div className={styles.schoolsLogo}>
                  <a href="https://law.yale.edu/" target="_blank" rel="noopener noreferrer">
                    <img id={styles.logoYale} className={styles} src="/logo_yale.svg" />    
                  </a>
                </div>
                <div className={styles.schoolsText}>
                  <h3 className={ styles.schoolName } style={{paddingRight: '100px'}}>Yale University</h3>
                  <h4 className={ styles.year}>2022</h4>
                  <h4 className={ styles.degree}>J.D., School of Law</h4>
                </div>
              </div>
              <div className={styles.schools}>
                <div className={styles.schoolsLogo}>
                  <a href="https://www.law.berkeley.edu/" target="_blank" rel="noopener noreferrer">
                    <img id={styles.logoBerkeley} className={styles} src="/logo_berkeley.svg" />    
                  </a>
                </div>
                <div className={styles.schoolsText}>
                  <h3 className={ styles.schoolName }>UC Berkeley</h3>
                  <h4 className={ styles.year}>2020</h4>
                  <h4 className={ styles.degree}>Ph.D. Jurisprudence and Social Policy, School of Law</h4>
                </div>
              </div>
              <div className={styles.schools}>  
                <div className={styles.schoolsLogo}>
                  <a href="https://newbrunswick.rutgers.edu/" target="_blank" rel="noopener noreferrer">
                    <img id={styles.logoRutgers} src="/logo_rutgers.svg" />    
                  </a>
                </div>
                <div className={styles.schoolsText}>
                  <h3 className={ styles.schoolName } style={{paddingRight: '70px'}}>Rutgers University</h3>
                  <h4 className={ styles.year}>2014</h4>
                  <h4 className={ styles.degree}>B.A. Political Science and History</h4>
                </div>
              </div>


            
            {/* <div className={styles.schools}></div> */}
            {/* <div className={styles.jobs}>hiiiii</div> */}
          </div>
          <div className={styles.workIcon}>business_center</div>
          <div className={styles.workTimeline}>
              {/* <div className={styles.schools}>   */}
                {/* <div className={styles.schoolsLogo}>
                  <a href="https://newbrunswick.rutgers.edu/" target="_blank" rel="noopener noreferrer">
                    <img id={styles.logoRutgers} src="logo_rutgers.svg" />    
                  </a>
                </div> */}
                <div className={styles.workText}>
                  {/* <h3 className={ styles.schoolName } style={{paddingRight: '70px'}}>Rutgers University</h3> */}
                  <h4 className={ styles.workTitle}>Associate Professor</h4>
                  <h4 className={ styles.degree}>Fordham Law School</h4>
                </div>
                <div className={styles.workText}>
                  {/* <h3 className={ styles.schoolName } style={{paddingRight: '70px'}}>Rutgers University</h3> */}
                  <h4 className={ styles.workTitle}>Postdoctoral Research Fellow</h4>
                  <h4 className={ styles.degree}>NYU Information Law Institute</h4>
                </div>
                <div className={styles.workText}>
                  {/* <h3 className={ styles.schoolName } style={{paddingRight: '70px'}}>Rutgers University</h3> */}
                  <h4 className={ styles.workTitle}>Visiting Postdoc</h4>
                  <h4 className={ styles.degree}>ETH Zurich Center for Law and Economics</h4>
                </div>
                <div className={styles.workText}>
                  {/* <h3 className={ styles.schoolName } style={{paddingRight: '70px'}}>Rutgers University</h3> */}
                  <h4 className={ styles.workTitle}>Postdoctoral Fellow</h4>
                  <h4 className={ styles.degree}>UC Berkeley Social Science Data Lab</h4>
                </div>
                <div className={styles.workText}>
                  {/* <h3 className={ styles.schoolName } style={{paddingRight: '70px'}}>Rutgers University</h3> */}
                  <h4 className={ styles.workTitle}>Technology Policy Intern</h4>
                  <h4 className={ styles.degree}>GitHub</h4>
                </div>
                <div className={styles.workText}>
                  {/* <h3 className={ styles.schoolName } style={{paddingRight: '70px'}}>Rutgers University</h3> */}
                  <h4 className={ styles.workTitle}>Google Policy Fellow</h4>
                  <h4 className={ styles.degree}>Engine</h4>
                </div>
                <div className={styles.workText}>
                  {/* <h3 className={ styles.schoolName } style={{paddingRight: '70px'}}>Rutgers University</h3> */}
                  <h4 className={ styles.workTitle}>Data Science for Social Good Fellow</h4>
                  <h4 className={ styles.degree}>University of Chicago</h4>
                </div>
              {/* </div> */}
            {/* <div className={styles.schools}></div> */}
            {/* <div className={styles.jobs}>hiiiii</div> */}
          </div>
        </div>
        {/* <img src="../site-content/images/headshot.png" alt="headshot" style={{maxWidth: '400px', borderRadius: '10px'}} /> */}
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: queryAbout.html }} />
        {/* hiiiii */}
    </div>
    </Layout>
    </>
  )
}

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(
      filter: {frontmatter: {title: {eq: "about"}}}
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