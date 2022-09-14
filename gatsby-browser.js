import React from "react"
import Layout from "./src/components/layout"
import { appId, GuardConfig } from './src/constants/guardConfig'
import { GuardProvider } from '@authing/guard-react'
import '@authing/guard-react/dist/esm/guard.min.css'
// Highlighting for code blocks
import "prismjs/themes/prism.css"

export function wrapPageElement({ element, props }) {
  return <GuardProvider appId={appId} mode="modal" config={GuardConfig} >
    <Layout {...props}>{element}</Layout>
    <div id="AUTHING_GUARD"></div>
  </GuardProvider>
}
