import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}
