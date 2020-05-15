import React, { Fragment } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import Header from "../Header"
import Footer from "../Footer"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout