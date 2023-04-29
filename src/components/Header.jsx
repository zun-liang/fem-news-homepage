import { useState, useEffect } from "react"
import Logo from "../assets/images/logo.svg"
import IconMenu from "../assets/images/icon-menu.svg"
import IconMenuClose from "../assets/images/icon-menu-close.svg"
import Navbar from "./Navbar"

function Header() {
    const [menu, setMenu] = useState(true)
    function handleMenu() {
        setMenu(prev => !prev)
    }

    function handleClick() {
        setMenu(true)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
    }, [screenWidth])

    return(
        <header className="header" id="home">
            <img src={Logo} alt="logo" className="logo"/>
            {screenWidth >= 1280
                ? <nav id="nav">
                    <Navbar/>
                  </nav>
                : <>
                    <img 
                        src={IconMenu} 
                        alt="icon menu" 
                        className="icon-menu"
                        onClick={handleMenu}
                    />
                    <nav className={menu ? "hidden" : ""} id="nav">
                        <div className="transparent"></div>
                        <div className="menu">
                            <img 
                                src={IconMenuClose} 
                                alt="icon menu close"
                                onClick={handleMenu}
                            />
                            <Navbar handleClick={handleClick}/>
                        </div>
                    </nav>
                  </>
            }
        </header>
    )
}

export default Header