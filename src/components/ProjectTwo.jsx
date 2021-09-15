import React from 'react'
import styles from '../styles/ProjectTwo.module.css'
import {CarouselWrapper} from "react-pretty-carousel";
import image1 from '../assets/walkAway/WalkAway1.png'
import image2 from '../assets/walkAway/WalkAway2.png'
import image3 from '../assets/walkAway/WalkAway3.png'
import image4 from '../assets/walkAway/WalkAway4.png'


function ProjectTwo() {
    return (
        <div className={styles.mainContainer}>
           <div className={styles.textBox}>
                <h1 className={styles.text}>Gamification av friskvårdsbidraget</h1>
                <p className={styles.text}>
                    Hur kan man gamifiera friskvården så att fler rör på sig? Det var frågeställningen vi fick när vi skulle ta fram 
                    en prototyp i designverktyget Figma.<br/>
                    Vi valde att skapa en app som räknar steg, dessa är kopplade till friskvårdsbidraget så att man får en summa, årsvis eller månadsvis, basserat på hur många steg man har gått. för att göra det hela lite roliga rent grafiskt så kan man som användare välja vilken destination man vill gå till. Hoppa in i 
                    <i><a href="https://www.figma.com/proto/LOB4aokR2NkvNozZtDmfdR/Untitled?page-id=0%3A1&node-id=25%3A31&viewport=241%2C48%2C0.53&scaling=scale-down&starting-point-node-id=0%3A3" target="_blank"> figma </a></i> för att kika närmre på prototypen.
                </p>
                <p>
                    <i>Användarupplevelser och interaktionsdesign, januari 2021</i>
                </p>
           </div>
            <div className={styles.carousel}>
            <CarouselWrapper items={2.2} showControls={false} >
                        <img className={styles.item} src={image1} alt={"image1"} />
                        <img className={styles.item} src={image2} alt={"image1"} />
                        <img className={styles.item} src={image3} alt={"image1"} />
                        <img className={styles.item} src={image4} alt={"image1"} />
                </CarouselWrapper>
            </div>
        </div>
    )
}

export default ProjectTwo
