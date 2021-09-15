import React from 'react'
import styles from '../styles/ProjectThree.module.css'
import Video from '../assets/movies/movieSearch.mp4'

function ProjectThree() {
    return (
        <div>
              <div className={styles.mainContainer}>
             <div className={styles.videoBox}>
                <video className={styles.video} autoPlay muted loop>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div>
            <div className={styles.textBox}>
                <h1 className={styles.text}>Dynamisk React-app</h1>
                <p className={styles.text}>
                    I denna uppgift skulle vi bygga en React applikation där vi hämtar data från OMDb API:et och presentera datan snyggt med JSX/CSS. Hemsidan valde vi att hålla relativt enkel rent designmässigt, när användaren skriver in filmtiteln i sökrutan börjar filtreringen utan att användaren behöver trycka på enter. Kortfattad information om filmen dyker upp när användaren hovrar över objekten. 
                </p>
                <p>
                    <i>Webbramverk för Javascript, mars 2021</i>
                </p>
            </div>
        </div>
        </div>
    )
}

export default ProjectThree
