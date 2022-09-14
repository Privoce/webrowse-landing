/**
 * @author: laoona
 * @date:  2022-01-28
 * @time: 10:21
 * @contact: laoona.com
 * @description: #
 */

import React from "react"
import Passport from "./_context"
import Layout from './layout';

export default function Container() {
  return (
    <Passport>
      <Layout />
    </Passport>
  )
}
