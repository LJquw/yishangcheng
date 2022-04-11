import React from "react";
import Item from "./Item";
import "./style.less"

const CommentView=(props)=>{
  const data=props.data
  return (
    <div>
      <ul className="comment-list">
        {
          data.map((ele,index)=>{
            return <Item data={ele} key={index}/>
          })
        }
      </ul>
    </div>
  )
}

export default CommentView;