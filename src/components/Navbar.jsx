import React, {useState} from 'react'
import { Link } from 'react-scroll'

function Navbar() {

    const [changenav, setChangenav] = useState(false);
    const changeTextColor = () => {
        if (window.scrollY >= 500){
            setChangenav(true)
        }else{
            setChangenav(false)
        }
    }

    window.addEventListener('scroll', changeTextColor)

    return (
        <div>
            <nav className="navBar">
                <Link
                activeClass="actived"
                className={changenav ? 'navLinks active' : 'navLinks' }
                to="about"
                spy={true}
                smooth={false}
                duration={400}
                >om mig</Link>
                <Link
                activeClass="actived"
                className={changenav ? 'navLinks active' : 'navLinks' }
                to="projects"
                spy={true}
                smooth={false}
                duration={500}
                >projekt</Link>
                <Link
                activeClass="actived"
                className={changenav ? 'navLinks active' : 'navLinks' }
                to="skills"
                spy={true}
                smooth={false}
                duration={500}
                >skills</Link>
            </nav>
        </div>
    )
}

export default Navbar
