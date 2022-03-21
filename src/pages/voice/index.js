/**
 * @author: laoona
 * @date:  2022-03-18
 * @time: 18:06
 * @contact: laoona.com
 * @description: #
 */

import React from "react"
import ContextProvider from "./reducer"
import Main from "./Main"

const Index = () => {

  return <ContextProvider>
    <Main/>
  </ContextProvider>
}

export default Index
