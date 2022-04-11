import React,{useEffect, useRef, useState} from "react";
import {withRouter} from 'react-router-dom'
import "./style.less"
import {useSelector,useDispatch} from 'react-redux'
import * as searchAction from '../../redux/actions/search'
import {useParams} from 'react-router-dom'

const SearchInput=(props)=>{
  const [keyworlds,setKeyworlds]=useState("")
  const searchKey=useRef();
  const dispatch=useDispatch();
  const params=useParams();
  const reduxKeyworlds=useSelector(state=>state.search)

  function changeHandle(e){
    setKeyworlds(e.target.value)
  }
  
  function keyUpHandle(e){
    if(keyworlds.length>0){
      if(e.keyCode===13){
        props.history.push("/search/"+keyworlds)
        dispatch(searchAction.updateSearch(keyworlds))
      }
    }
  }

  // 回传
  useEffect(()=>{
    if(params.keyworlds){
      dispatch(searchAction.updateSearch(params.keyworlds))
    }else{
      dispatch(searchAction.updateSearch(""))
    }
    setKeyworlds(reduxKeyworlds.search)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[reduxKeyworlds.search,params.keyworlds])

  return (
    <input 
      type="text" 
      className="search-input" 
      onKeyUp={keyUpHandle} 
      value={keyworlds} 
      onChange={changeHandle} 
      ref={searchKey} 
    />
  )
}

export default withRouter(SearchInput);