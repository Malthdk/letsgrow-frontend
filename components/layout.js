import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ header, children }) => {

  return (
    <>
    <div is="outer-container">
    
    <Header header={header} />
    <div className="content-wrapper">
        <main id="page-wrap">{children}</main>
    </div>
    <Footer />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
