import React from 'react'
import './SearchBar.scss'
import DarkSearch from '../../assets/img/dark-search.png'
import LightSearch from '../../assets/img/light-search.png'
import { ThemeContext, useContext } from '../../context/useThemeContext'
import { FilterContext } from '../../context/useFilterContext'

const SearchBar = () => {

  const {mode} = useContext(ThemeContext);
  const {filter,setFilter}= useContext(FilterContext)

  const handleChangeSearch = (e) => {
    setFilter({
      ...filter,
      name:e.target.value
    })
  }

  return (
    <div className={`search ${mode}-elements disabled`}>
      <img src={mode === "light" ? LightSearch : DarkSearch} alt="search"/>
      <input  className={`searchInput ${mode}-elements`} placeholder={filter.region ? "Please make region filter default value": "Search for a country..." }   value={filter.name} onChange={handleChangeSearch} disabled={filter.region ? true : false }/>
    </div>
  )
}

export default SearchBar
