import React, {useState} from 'react'
import '../styles/header.scss'

function Header() {
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
        <div className={changestyle ? 'header active' : 'header' }>
           <ul className="words">
                <li className="wordsLine">
                    <p className="headerText">&nbsp;</p>
                    <p className="headerText">Rebecca</p>
                </li>
                <li className="wordsLine">
                    <p className="headerText">Rebecca</p>
                    <p className="headerText">Stridsman</p>
                </li>
                <li className="wordsLine">
                    <p className="headerText">Stridsman</p>
                    <p className="headerText"><span>Frontend</span></p>
                </li>
                <li className="wordsLine">
                    <p className="headerText"><span>Frontend</span></p>
                    <p className="headerText"><span>Utvecklare</span></p>
                </li>
                <li className="wordsLine">
                    <p className="headerText"><span>Utvecklare</span></p>
                    <p className="headerText">sthlm</p>
                </li>
                <li className="wordsLine">
                    <p className="headerText">sthlm</p>
                    <p className="headerText">2022</p>
                </li>
                <li className="wordsLine">
                    <p className="headerText">2022</p>
                    <p className="headerText">&nbsp;</p>
                </li>
            </ul>
        </div>
    )
}


export default Header


