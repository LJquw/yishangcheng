import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./style.less";
import DefaultImg from '../../../../assets/images/default.png';
import { loadImageAsync } from "../../../../utils/loadImg"; 

const Item=(props)=>{
  const [currentImg, setCurrentImg] = useState(DefaultImg)
  const data = props.data
  loadImageAsync(data.img).then(res => {
      setCurrentImg(res)
  }).catch(error => {
      console.log(error);
  })

  return (
    <div className="list-item">
      <Link to={`/details/${data.id}`}>
        <img src={currentImg} alt="" />
        <div className="mask">
          <div className="left">
            <p>{data.title}</p>
            <p>data.houseType</p>
          </div>
          <div className="right">
            <div className="btn">
              {data.rentType}
            </div>
            {/* 解析数据中的html结构 */}
            <p dangerouslySetInnerHTML={{__html:data.price+"元/年"}}></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Item;