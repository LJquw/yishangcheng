import React,{useState,useEffect} from "react";
import {withRouter} from "react-router-dom"
import {useDispatch} from "react-redux"
import * as collectActions from "../../../redux/actions/collect"
import "./style.less"


const BuyAndStoreView=(props)=>{
  const dispatch=useDispatch();
  const [isCollect,setIsCollect]=useState(true)

  // 初始化操作
  useEffect(()=>{
    setIsCollect(isStore())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function storeHandle(){
    if(props.user.token){
      // 允许收藏
      /**
       * 判断用户是否收藏
       * 1. 收藏则取消收藏
       * 2. 未收藏则收藏
       */
       if(isStore()){
        setIsCollect(true)
        // 已收藏
          dispatch(collectActions.removeCollect(props.id))
        }else{
          setIsCollect(false)
          // 未收藏
          dispatch(collectActions.setCollect(props.id));
        }
    }else{
      // 请登录
      props.history.push("/login")
    }
  }

  /**
   * 用户收藏判断
   * return boolean
   *    true:收藏
   *    false:未收藏
   */
  function isStore(){
    let collects=props.collects
    let id=props.id
    return collects.some(item =>{
      return item === id;
    })
  }

  return (
    <div className="buy-store-container clear-fix">
      <div className="item-container float-left">
        {
          !isCollect?
          <button className="selected o" onClick={storeHandle}>已收藏</button>
          :
          <button className="selected" onClick={storeHandle}>收藏</button>
        }
      </div>
      <div className="item-container float-right">
        <button className="selected">购买</button>
      </div>
    </div>
  )
}

export default withRouter(BuyAndStoreView);