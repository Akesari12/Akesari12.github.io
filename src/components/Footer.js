import { Link } from 'gatsby'
import React, {useState} from 'react'
import { PrevPageContext, ToggleTransitionDirection } from '../contexts/transitionsContext'
import * as styles from '../styles/navbar.module.css'

function Footer() {
  return (
    <footer>
    <p>&copy; {new Date().getFullYear()} Aniket Kesari</p>
    <p className="ryland">a <span id="trrembert">trrembert</span> site</p> 
    </footer>
  )
}

export default Footer