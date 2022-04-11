import React,{useState,useEffect} from "react";
import DetailsView from "../DetailsView";
import api from "../../../api";

const DetailsList=(props)=>{
  const [detailsData,setDetailsData] = useState({});

  useEffect(()=>{
    api.details({
      id:props.id
    }).then(res=>{
      if(res.status===200){
        setDetailsData(res.data)
      }
    })
    return ()=>{
      setDetailsData({})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      {
        detailsData.imgs?
        <DetailsView detailsData={detailsData} id={props.id} />:
        <div>等待数据加载....</div>
      }
    </div>
  )
}

export default DetailsList;