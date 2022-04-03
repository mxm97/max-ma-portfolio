import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  homeContainer,
  homeImage,
  bioText,
} from './index.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <div className={homeContainer}>
        
        <p className={bioText}><strong>Max Ma</strong> is a fullstack developer who is trying his very best.</p>

        <StaticImage className={homeImage}
        alt="A picture of Max Ma"
        src="../images/portfolio_image_1.jpg"
        />

      </div>

    </Layout>
  )
}

export default IndexPage