import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import CityHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import {changeCity} from '../../redux/actions/city'
import CityLists from "./CityLists";

const City=(props)=>{
  // const [city,setCity]=useState("成都")
  const dispatch=useDispatch();
  const city=useSelector(state => state.city);

  function onCityEvent(city){
    // setCity(city)
    dispatch(changeCity(city));
    props.history.push("/")
  }

  return (
    <div>
      <CityHeader title={"城市选择"} />
      <CurrentCity city={city.cityName}/>
      <CityList onEvent={onCityEvent} />
      <CityLists onEvent={onCityEvent} />
    </div>
  )
}

export default City;