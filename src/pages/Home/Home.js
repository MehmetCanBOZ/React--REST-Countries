import React from 'react'
import './Home.scss'
import CountryCard from '../../components/CountryCard/CountryCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import FilterBar from '../../components/FilterBar/FilterBar'
import useFetch from '../../hooks/useFetch'
import ReactLoading from 'react-loading';
import { ThemeContext, useContext } from '../../context/useThemeContext'


const Home = () => {
  const  {mode} = useContext(ThemeContext)
  const {data,loading} = useFetch();
  
  if(loading){
    return  <div className="loading"><ReactLoading type="spin" color="#000" height={300} width={300} /></div> 
   }
  
  return (
    
    <div>
      <div className={`${mode}-background`}>
        <div className="main">
          <div className="filter">
             <SearchBar/>
             <FilterBar/>
          </div>
          <div className="country">
          { data?.map((country,index) => <CountryCard key = {index} name = {country.name.common} flag = {country?.flags.png} population = {country?.population} region = {country?.region} capital = {country.capital}/>) 
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
