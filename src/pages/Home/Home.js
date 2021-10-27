import React, { useState, useEffect } from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import CountryCard from '../../components/CountryCard/CountryCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import FilterBar from '../../components/FilterBar/FilterBar'
import useFetch from '../../hooks/useFetch'
import ReactLoading from 'react-loading';
import { ThemeContext, useContext } from '../../context/useThemeContext'
import { FilterContext } from '../../context/useFilterContext' ;

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
