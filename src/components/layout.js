import React from "react"
import { Reset } from 'styled-reset'
// import Navbar from "./Navbar"
// import Footer from "./Footer"
import Seo from "../components/Seo/seo"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <Reset />
      {/* <Navbar /> */}
      <div className="layout">{children}</div>
      {/* <Footer Logo={Logo} /> */}
    </>
  )
}

export default Layout
