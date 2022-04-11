import React from "react";
import Item from "./Item"

const OrderListView=(props)=>{
  const data=props.data
  return (
    <div>
      {
        data.map((ele,index)=>{
          return <Item key={index} data={ele} user={props.user} />
        })
      }
    </div>
  )
}

export default OrderListView;