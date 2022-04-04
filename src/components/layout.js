import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navContainer,
  navRight,
  navLink,
  headerBlock,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <nav className={navContainer}>
        <Link to="/" className={navLink}>
          Home
        </Link>
        <div className={navRight}>
          <Link to="/about" className={navLink}>
            About
          </Link>
          <Link to="/blog" className={navLink}>
            Blog
          </Link>
        </div>
      </nav>
      
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>

      <section className={headerBlock}>
        <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
      </section>
      
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout