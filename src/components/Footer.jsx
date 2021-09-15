import React from 'react'
import styles from '../styles/Footer.module.css'
import gitHub from "../assets/icons/github.png";
import linkedIn from "../assets/icons/linkedin.png";
import gmail from "../assets/icons/gmail.png";

function Footer() {
    return (
        <div className={styles.footer} id="footer">   
        <div className={styles.contact}>
            <a href="https://github.com/restridsman" target="_blank"><img className={styles.links} src={gitHub} alt={gitHub} /></a>
            <a href="https://www.linkedin.com/in/rebecca-stridsman-7602b8140" target="_blank"><img className={styles.links} src={linkedIn} alt={linkedIn} /></a>
            <a href="mailto:rstridsman@gmail.com" target="_blank"><img className={styles.links} src={gmail} alt={gmail} /></a>
        </div>
        <p className={styles.copy}>&copy; Rebecca Stridsman, 2021</p>
    </div>
    )
}

export default Footer
