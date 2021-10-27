import {useState,useEffect} from "react";
import CountryServices from "../services/country";
import { FilterContext, useContext } from "../context/useFilterContext";
const useFetch = (params = null) => {
  const {filter} = useContext(FilterContext)
  const [data,setData] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);

  const fetchbYNameData = async () =>{
    try {
      const {data} = await  CountryServices.getByName(params);
      setData(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }

  }

  const fetchData = async () =>{
    try {
      const {data} = await CountryServices.getAll()
      setData(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }

  }

  const fetchByRegion = async () =>{
    try {
      const {data} = await CountryServices.getbyFilter(filter)
      setData(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }

  }

  const fetchBySearch = async () =>{
    try {
      const {data} = await CountryServices.getbySearch(filter)
      setData(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }

  }

  useEffect(() => {
    if(params){
      fetchbYNameData();
    }else if(filter.region){
      fetchByRegion();
    }else if(filter.name){
      fetchBySearch()
    }
    else{
      fetchData();
    }
  }, [filter])

  return {
    data,
    error,
    loading
  }
}

export default useFetch;