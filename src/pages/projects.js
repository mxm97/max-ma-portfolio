import * as React from 'react'
import Layout from '../components/layout'
import {
    cardsContainer,
    projectCard,
    projectImage,
  } from './projects.module.css'

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
        <div className={cardsContainer}>
            <div className={projectCard}>
                <a href="https://destination-nyc.herokuapp.com/">
                    DestinationNYC
                    <img className={projectImage} src="https://i.imgur.com/W84nVbX.jpg"/>
                </a>
            </div>
            <div className={projectCard}>
                <a href="https://wallpaper-radio.netlify.app/">
                    Wallpaper Radio
                    <img className={projectImage} src="https://i.imgur.com/ASH0Zb2.png"/>
                </a>
            </div>
            <div className={projectCard}>
                <a href="https://quotebook-34161.herokuapp.com/quotes">
                    QuoteBook
                    <img className={projectImage} src="https://i.imgur.com/0482oDV.png"/>
                </a>
            </div>
            <div className={projectCard}>
                <a href="https://acnh-fishpedia.netlify.app/">
                    ACNH Fishpedia
                    <img className={projectImage} src="https://i.imgur.com/hYgH8QA.png"/>
                </a>
            </div>
        </div>
    </Layout>
  )
}

export default ProjectsPage