import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  bio,
  bioContainer,
  textContainer,
  bioText,
  photos,
  homeImage,
  imageText,
} from './index.module.css'

function swapText() {
  let aboutMe = document.getElementsByClassName("bioText");
  if (aboutMe.innerHTML === "Max Ma is a fullstack developer who is trying his very best.") {
    aboutMe.innerHTML = "did it work?";
  } else {
    aboutMe.innerHTML = "Max Ma is a fullstack developer who is trying his very best.";
  }
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <section className={bio}>
        <div className={bioContainer}>
          <div className={textContainer}>
            <p className={bioText}><strong>Max Ma</strong> is a fullstack developer who is trying his very best.</p>
          </div>
          <div className={photos}>
            <StaticImage className={homeImage}
            alt="A picture of Max Ma"
            src="../images/portfolio_image_1.jpg"
            />
            <p className={imageText}>Hello there!</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage