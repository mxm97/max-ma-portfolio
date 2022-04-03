import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Max Ma's portfolio site</p>
      <StaticImage
        alt="A picture of Max Ma"
        src="../images/portfolio_image_1.jpg"
      />
    </Layout>
  )
}

export default IndexPage