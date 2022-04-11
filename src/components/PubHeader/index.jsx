import React from "react";
import {withRouter} from 'react-router-dom'
import "./style.less"

const PubHeader=(props)=>{

  function backHandle(){
    // 返回上一页
    // 方法一
    props.history.go(-1);

    // 方法二
    // window.history.back();
  }
  
  return (
    <div id="common-header">
      <span className="back-icon" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <h1>{props.title}</h1>
    </div>
  )
}

export default withRouter(PubHeader);