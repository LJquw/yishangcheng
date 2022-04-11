import React from "react";
import {useSelector} from "react-redux"
import BuyAndStoreView from "../BuyAndStoreView";
import "./style.less"

const BuyAndStore=(props)=>{
  const login=useSelector(state=>state.login);
  const collects=useSelector(state=>state.collect)
  return (
    <div className="buy-and-store">
      <BuyAndStoreView id={props.id} user={login.user} collects={collects} />
    </div>
  )
}

export default BuyAndStore;