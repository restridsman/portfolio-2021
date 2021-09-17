import React from 'react'
import styles from '../styles/ProjectOne.module.css'
import Video from "../assets/movies/mormorMedia.mp4"

function ProjectOne() {
    return (
        <div className={styles.mainContainer} id="projects">
             <div className={styles.textBox}> 
                <h1 className={styles.text}>En fiktiv Webbyrå</h1>
                <p className={styles.text}>I denna gruppuppgift skulle vi skapa en hemsida som en fiktiv webbyrå, hemsidan skulle skapas i HTML och CSS och utan hjälp av något css-ramverk såsom Bootstrap. <br/> Jag fick i uppgift att göra homepage och använde mig av ett gridsystem för att få till en bra grundstruktur och enkelhet till eventuell mobilanpassning. Jag gillar att hålla det enkelt - något som genomsyras i fler projekt där jag har ett finger med i designen. För att väcka liv i hemsidan så 
                lägger jag till en rörlig bakgrund i headersektionen och en trevlig bild med paralaxeffekt i mitten.<br/>kika in på <i><a href="https://github.com/oscarlundberg-sthlm/gruppuppgift-webbsida" target="_blank">github</a></i> för att ta del av koden. </p> 
                <p><i>Webbutveckling, September 2020</i></p>
            </div>
            <div className={styles.videoBox}>
                <video className={styles.video} autoPlay muted loop playsinline>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default ProjectOne
