import React,{useState,useEffect} from "react";
import CommentView from "../CommentView"
import api from "../../../api"
import LoadMore from "../../../components/LoadMore"

const Comment=(props)=>{
  const [comment,setComment]=useState([])
  const [hasMore,setHasMore]=useState(false)

  useEffect(()=>{
    http()
    return ()=>{
      setComment([])
      setHasMore(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function loadMoreHandle(){
    // 加载更多操作
    http()
  }

  function http(){
    api.comment({id:props.id}).then(res=>{
      if(res.data.status===200){
        setComment(comment.concat(res.data.result.data))
        setHasMore(res.data.result.hasMore)
      }
    }).catch(error=>{
      console.log(error);
    })
  }

  return (
    <div>
      {
        comment.length>0?
        <CommentView data={comment}/>:
        <div>等待数据加载....</div>
      }
      {
        hasMore?
        <LoadMore onLoadMore={loadMoreHandle} />:
        <div>没有数据了</div>
      }
    </div>
  )
}

export default Comment;