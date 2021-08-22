import React from "react"
import "./reset.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Seo from "../components/Seo/seo"
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <Navbar />
      <div className="layout">{children}</div>
      {/* <Footer Logo={Logo} /> */}
    </>
  )
}

export default Layout
