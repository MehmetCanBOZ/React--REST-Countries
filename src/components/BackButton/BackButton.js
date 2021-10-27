import React from 'react'
import './BackButton.scss'
import { ThemeContext, useContext } from '../../context/useThemeContext';
import DarkBack from '../../assets/img/dark-back.png'
import LightBack from '../../assets/img/light-back.png'
import { Link } from 'react-router-dom';
const BackButton = () => {
  const {mode} = useContext(ThemeContext);

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className={`backButton ${mode}-elements`}>
        <img src={mode === 'light' ? LightBack : DarkBack}/>
        <p className={`buttonText ${mode}-text`}>Back</p>
      </div>
    </Link>
  )
}

export default BackButton
