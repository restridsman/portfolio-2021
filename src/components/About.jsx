import React, {useState} from 'react'
import '../App.css'
import Fade from 'react-reveal/Fade';
import linkedIn from "../assets/icons/linkedin.png";
import gmail from "../assets/icons/gmail.png";

function About() {
    const [changestyle, setChangestyle] = useState(false);
    
    const changeBackground = () => {
        if (window.scrollY >= 300){
            setChangestyle(true)
        }else{
            setChangestyle(false)
        } 
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={changestyle ? 'aboutContainer active' : 'aboutContainer' } id="about">
            <Fade bottom>
                <div className="aboutPhotoBox">
                    <div className="aboutImg"></div>
                </div>
            </Fade>
            <Fade bottom>
                <div className="aboutContent">
                    <div className="aboutTextArea">
                        <h1 className="text">Hej</h1>
                        <p className="text"> 
                            Vad kul att du har hittat hit! Mitt namn är Rebecca Stridsman och jag går mitt andra och sista år på Jensen Yrkeshögskola vilket innebär att jag inom kort är färdigutbildad webbutvecklare med bas i Stockholm. 
                            I den här portfolion kan du se var jag har gjort under mitt första år inom frontend. Just nu är jag på jakt efter ett bolag där jag kan göra min LIA. Är du den jag letar efter eller vet du vem det kan vara? <br/>Hör av dig!
                        </p> 
                        <p className="text"><i>September 2021</i></p>
                        <div className="contact">
                            <a href="https://www.linkedin.com/in/rebecca-stridsman-7602b8140" target="_blank">
                                <img className="links" src={linkedIn} alt={linkedIn} />
                            </a>
                            <a href="mailto:rstridsman@gmail.com" target="_blank">
                                <img className="links" src={gmail} alt={gmail} />
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default About
