import React from 'react'
import "./FilterBar.scss"
import { ThemeContext, useContext } from '../../context/useThemeContext';
import { FilterContext } from '../../context/useFilterContext';
const FilterBar = () => {
  const  {mode} = useContext(ThemeContext);

  const  {filter, setFilter} = useContext(FilterContext);

  const handleChangeFilter = (e) => {
    setFilter({
      ...filter,
      region:e.target.value
    })
  }
  console.log("filter :" , filter);
  return (
    <select name="region" className={`select ${mode}-elements`} onChange={handleChangeFilter} disabled={filter.name ? true : false}>
      <option value="">Filter By Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}

export default FilterBar
