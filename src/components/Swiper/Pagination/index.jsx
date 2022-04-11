import React from "react";
import classnames from 'classnames'
import './style.less'

const Pagination=(props)=>{
  const arr=new Array(props.len).fill(1)
  const currentIndex=props.currentIndex
  return (
    <div className="swiper-pagination">
      <ul>
        {
          arr.map((len,index)=>{
            return <li className={classnames({'selected':currentIndex===index})} key={index}></li>
          })
        }
      </ul>
    </div>
  )
}

export default Pagination;