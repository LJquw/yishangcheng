import React,{useEffect} from "react";
import {useSelector} from "react-redux"
import {withRouter} from "react-router-dom"
import OrderHeader from "../../components/PubHeader"
import UserInfo from "./UserInfo";
import OrderList from "./OrderList";

const Order=(props)=>{
  const city=useSelector(state=>state.city)
  const user=useSelector(state=>state.login.user)

  useEffect(()=>{
    if(!user.token){
      props.history.push("/login")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div>
      <OrderHeader title={"订单评价"} />
      <UserInfo city={city} user={user} />
      <OrderList user={user} />
    </div>
  )
}

export default withRouter(Order);