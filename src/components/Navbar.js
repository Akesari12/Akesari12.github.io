import { Link } from 'gatsby'
import React, {useState} from 'react'
import { PrevPageContext, ToggleTransitionDirection } from '../contexts/transitionsContext'
import * as styles from '../styles/navbar.module.css'

// const [currentPage, setCurrentPage] = useState(1);
// const [prevPage, setPrevPage] = useState(0);

// function pageClickDirection(newPage, currentPage, prevPage, setCurrentPage, setPrevPage) {
  
//   if (newPage > currentPage) {
//     ToggleTransitionDirection();
//   } else if (currentPage < prevPage) {
//     const transitionDirection = pageTransitions.fromLeft;
//   }

// }

export default function Navbar() {

  return (
    <nav className={styles.nav}>
        <Link to="/">
          <h2 className={styles.fullname}>Aniket Kesari</h2>
        </Link>
        <div className={styles.links}>
            <Link to="/" className={styles.hoverUnderlineAnimation}><span className={styles.materialSymbolsRounded} id={styles.iconHome}>home</span>Home</Link>
            <Link to="/about" className={styles.hoverUnderlineAnimation}><span className={styles.materialSymbolsRounded} id={styles.iconAbout}>frame_person</span>About</Link>
            <Link to="/research" className={styles.hoverUnderlineAnimation}><span className={styles.materialSymbolsRounded} id={styles.iconResearch}>gavel</span>Research</Link>
            <Link to="/teaching" className={styles.hoverUnderlineAnimation}><span className={styles.materialSymbolsRounded} id={styles.iconTeaching}>edit_square</span>Teaching</Link>
        </div>
    </nav>
  )
  }