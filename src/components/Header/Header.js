import React, { useContext } from 'react'
import "./Header.scss"
import Dark from "../../assets/img/dark.png"
import Light from "../../assets/img/light.png"
import { ThemeContext } from '../../context/useThemeContext'
const Header = () => {
  const  {mode,setMode} = useContext(ThemeContext)

  const changeTheme = () =>{
    setMode(mode === "light" ? "dark" : "light")
  }
  return (
    <div className={`${mode}-elements`}>
      <div className={`header`}>
        <h1>Where in the world?</h1>
        <div className="toggle-mode">
          <img src={mode === "light" ? Light : Dark} onClick={() => changeTheme()} alt="flag"/>
          <h3>Dark Mode</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
