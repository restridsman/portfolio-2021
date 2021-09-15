import React from 'react'
import styles from '../styles/Skills.module.css'
import Fade from 'react-reveal/Fade';

function Skills() {
    return (
        <div className={styles.mainContainer} id="skills">
            <div className={styles.progressBars}>
                <Fade bottom>
                    <div className={styles.box}>
                        <div className={styles.htmlIcon}></div>
                        <div className={styles.info}>
                            <h3 className={styles.language}>HTML</h3>
                            <div className={styles.progressBar}>
                                <div className={styles.staminaHTML}></div>
                            </div>
                        </div>
                        <h3 className={styles.procent}>90%</h3>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={styles.box}>
                        <div className={styles.cssIcon}></div>
                        <div className={styles.info}>
                            <h3 className={styles.language}>CSS</h3>
                            <div className={styles.progressBar}>
                                <div className={styles.staminaCSS}></div>
                            </div>
                        </div>
                        <h3 className={styles.procent}>80%</h3>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={styles.box}>
                        <div className={styles.jsIcon}></div>
                        <div className={styles.info}>
                            <h3 className={styles.language}>JavaScript</h3>
                            <div className={styles.progressBar}>
                                <div className={styles.staminaJS}></div>
                            </div>
                        </div>
                        <h3 className={styles.procent}>50%</h3>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={styles.box}>
                        <div className={styles.reactIcon}></div>
                        <div className={styles.info}>
                            <h3 className={styles.language}>React</h3>
                            <div className={styles.progressBar}>
                                <div className={styles.staminaReact}></div>
                            </div>
                        </div>
                        <h3 className={styles.procent}>50%</h3>
                    </div>
                </Fade>                
            </div>
        </div>
    )
}

export default Skills
