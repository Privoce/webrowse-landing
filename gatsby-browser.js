import React from "react"
import Layout from "./src/components/layout"
// Highlighting for code blocks
import "prismjs/themes/prism.css"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
