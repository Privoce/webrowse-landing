import React from "react"
import { Reset } from 'styled-reset'
import GlobalStyles from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Reset />
      <div className="layout">{children}</div>
    </>
  )
}

export default Layout
