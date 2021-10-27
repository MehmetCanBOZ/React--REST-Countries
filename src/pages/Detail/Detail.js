import './Detail.scss'
import {
  useParams
} from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import ReactLoading from 'react-loading';
import BackButton from '../../components/BackButton/BackButton';
import CountryDetail from '../../components/CountryDetail/CountryDetail';
import { ThemeContext, useContext } from '../../context/useThemeContext';

const Detail = () => {
  const { name } = useParams();

  const {data,loading} = useFetch(name);
  const {mode} = useContext(ThemeContext);

  if(loading){
    return  <div className="loading"><ReactLoading type="spin" color="#000" height={300} width={300} /></div> 
   }

  return (
    <div className={`${mode}-background`}>
      <div className="detail">
        <BackButton/>
        <CountryDetail data={data[0]}/> 
      </div>
    </div>

  )
}

export default Detail
