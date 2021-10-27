import React from 'react'
import "./CountryDetail.scss"
import { ThemeContext,useContext } from '../../context/useThemeContext';
const CountryDetail = ({data}) => {
  const {mode} = useContext(ThemeContext);
  return (
    <div className="detail-card">
      <img src={data?.flags?.svg} width="80%" height="400"/>
    
      <div className="detail-card-info">
         <h3 className={`counrtyName ${mode}-text`}>{data?.name}</h3>
         <div className="info-detail">
           <div>
              <p className={`info-text ${mode}-text`}><span className="">Native Name: </span>{data?.nativeName}</p>
              <p className={`info-text ${mode}-text`}><span className="">Population: </span>{data?.population.toLocaleString("en-US")}</p>
              <p className={`info-text ${mode}-text`}><span className="">Region: </span>{data?.region}</p>
              <p className={`info-text ${mode}-text`}><span className="">Sub Region: </span>{data?.subregion}</p>
              <p className={`info-text ${mode}-text`}><span className="">Capital: </span>{data?.capital}</p>
           </div>
           <div>
              <p className={`info-text ${mode}-text`}><span className="">Top Level Domain: </span>{data?.topLevelDomain[0]}</p>
              <p className={`info-text ${mode}-text`}><span className="">Currencies: </span>{data?.currencies[0]?.name}</p>
              <p className={`info-text ${mode}-text`}><span className="">Languages: </span>{data.languages.map(item => `${item.name} `) }
              </p>
           </div>
         </div>
         <div className={`borders ${mode}-text`}>
           <h4>Border Countries: </h4>
           {
             data?.borders?.map(item => <p className={`border-country ${mode}-elements`}>{item}</p>)
           }
         </div>
      </div> 
    </div>
  )
}

export default CountryDetail
