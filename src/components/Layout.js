import React, { useState, useContext } from 'react'
import Navbar from './Navbar'
import "../styles/global.css"
import { AnimatePresence, motion, domAnimation } from "framer-motion"
import {PrevPageContext} from '../contexts/transitionsContext';
import Footer from './Footer';



export default function Layout({pageKey, children }) {

  const pageTransitions = useContext(PrevPageContext).fromRight;
  // console.log(pageTransitions);
  // console.log(pageKey);
  // // const transitionDirection = (currentPage > prevPage) ? pageTransitionRightVariants : pageTransitionLeftVariants;
  // const transitionDirection = pageTransitionLeftVariants;

  return (
    <div className="layout">
        <Navbar />
        {/* <AnimatePresence> */}
          <div className="content" key={pageKey}
            variants = {pageTransitions}
            initial={pageTransitions.initial}
            animate={pageTransitions.animate}
            exit={pageTransitions.exit}
            transition={pageTransitions.transition}>
              { children }
          </div>
        {/* </AnimatePresence> */}
        <Footer />
    </div>
  )
}
