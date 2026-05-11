import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.fullname}>
        <Link to="/">Aniket Kesari</Link>
      </span>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/research">Research</Link>
        <Link to="/teaching">Teaching</Link>
        <Link to="https://github.com/Akesari12/Akesari12.github.io/raw/dev/Aniket_Kesari_CV.pdf">CV</Link>
      </div>
    </nav>
  )
}
