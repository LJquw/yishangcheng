/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from "react";
import SearchListView from "../SearchListView";
import api from "../../../api";
import LoadMore from "../../../components/LoadMore";

const SearchList=(props)=>{
  const [searchData,setSearchData]=useState([]);
  const [hasMore,setHasMore]=useState(false)

  function http(){
    api.search({
      search: props.search
    }).then(res => {
      if (res.data.status === 200) {
        // 合并数据
        setSearchData(searchData.concat(res.data.result.data))
        setHasMore(res.data.result.hasMore)
      }
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(()=>{
    http();

    return ()=>{
      setSearchData([]);
      setHasMore(false)
    }
  },[props.search])

  function LoadMoreHandle(){
    http();
  }

  return (
    <div>
      {
        searchData.length>0?
        <SearchListView search={searchData} />:
        <div>等待加载....</div>
      }
      {
        hasMore?
        <LoadMore onLoadMore={LoadMoreHandle} />:
        <div>加载完毕....</div>
      }
    </div>
  )
}

export default SearchList;