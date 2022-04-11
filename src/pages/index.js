import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  bio,
  bioContainer,
  bioText,
  photos,
  homeImage,
  imageText,
} from './index.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <section className={bio}>
        <div className={bioContainer}>
          <div>
            <p className={bioText}><strong>Max Ma</strong> is a fullstack developer who is trying his very best.</p>
          </div>
          <div className={photos}>
            <StaticImage className={homeImage}
            alt="A picture of Max Ma"
            src="../images/portfolio_image_1.jpg"
            />
            <p className={imageText}>I really need a new picture</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage