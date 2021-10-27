import React from 'react'
import './CountryCard.scss'
import { ThemeContext, useContext } from '../../context/useThemeContext'
import { Link } from 'react-router-dom';

const CountryCard = ({name,flag,population,region,capital}) => {
  const {mode} = useContext(ThemeContext);

  return (
    <Link to={`/${name}`} style={{ textDecoration: 'none' }}>
    <div className="card">
     
        <img src={flag} alt="flag"/>
        <div className={`card__info ${mode}-elements`}>
          <h4 className={`county_name ${mode}-text`}>{name}</h4>
          <p className={`info ${mode}-text`}><span>Population: </span>{population.toLocaleString("en-US")}</p>
          <p className={`info ${mode}-text`}><span>Region: </span>{region}</p>
          <p className={`info ${mode}-text`}><span>Capital: </span>{capital}</p>
        </div>
    </div>
    </Link>
  )
}

export default CountryCard
