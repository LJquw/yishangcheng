import React,{useEffect,useState,useRef} from "react";
import "./style.less"

const LoadMore=(props)=>{
  const more=useRef();
  const [loadTop,setLoadTop]=useState(10000);

  useEffect(()=>{
    // 视口高度
    let winHeight=document.documentElement.clientHeight;
    let timer=null;
    window.addEventListener("scroll",scrollHandle)
    function scrollHandle(){
      if(more.current){
        // getBoundingClientRect:动态获取元素距离顶部的距离
        setLoadTop(more.current.getBoundingClientRect().top);
        if(timer){
          clearTimeout(timer);
        }else{
          timer=setTimeout(()=>{
            if(winHeight>loadTop){
              props.onLoadMore()
            }
          },300)
        }
      }
    }
    return ()=>{
      window.removeEventListener("scroll",scrollHandle)
      // clearTimeout(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loadTop])

  return (
    <div ref={more} className="load">
      加载更多
    </div>
  )
}

export default LoadMore;