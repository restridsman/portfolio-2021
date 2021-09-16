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
                        <div className={styles.left}>
                            <div className={styles.info}>
                                <h3 className={styles.language}>HTML</h3>
                                <h3 className={styles.procent}>&nbsp;&nbsp;90%</h3>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.staminaHTML}></div>
                            </div>  
                        </div>  
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={styles.box}>
                        <div className={styles.cssIcon}></div>
                        <div className={styles.left}>
                            <div className={styles.info}>
                                <h3 className={styles.language}>CSS</h3>
                                <h3 className={styles.procent}>&nbsp;&nbsp;80%</h3>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.staminaCSS}></div>
                            </div> 
                        </div>           
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={styles.box}>
                        <div className={styles.jsIcon}></div>
                        <div className={styles.left}>
                            <div className={styles.info}>
                                <h3 className={styles.language}>JavaScript</h3>
                                <h3 className={styles.procent}>&nbsp;&nbsp;50%</h3>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.staminaJS}></div>
                            </div>
                        </div>
                    </div>                   
                </Fade>
                <Fade bottom>
                    <div className={styles.box}>
                        <div className={styles.reactIcon}></div>
                        <div className={styles.left}>
                            <div className={styles.info}>
                                <h3 className={styles.language}>React</h3>
                                <h3 className={styles.procent}>&nbsp;&nbsp;50%</h3>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.staminaReact}></div>
                            </div>
                        </div>
                    </div>   
                </Fade>                
            </div>
        </div>
    )
}

export default Skills
