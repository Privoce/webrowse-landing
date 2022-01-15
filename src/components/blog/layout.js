import * as React from "react"
import { Link } from "gatsby"
import BlogStyles from '../../styles/BlogStyles';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title} Blog</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/blog/">
        {title} Blog
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <BlogStyles/>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://webrow.se">Webrow.se</a>
      </footer>
    </div>
  )
}

export default Layout
