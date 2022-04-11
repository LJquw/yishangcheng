import axios from '../utils/request'

// 路径地址
const base={
  baseUrl:"http://localhost:5566",
  homehot1:"/api/home/hot1",
  homehot2:"/api/home/hot2",
  cityUrl:"/api/aj/getcitycode",
  search:"/api/search",
  deatils:"/api/details",
  login:"/api/login",
  comment:"/api/comment",
  commentOrder:"/api/order/comment",
  submitComment:"/api/order/comment/submit"
}


// 请求方法
const api = {
  /**
   * 获取首页热门产品1
   */
  getHomtHot1(params){
      return axios.get(base.baseUrl + base.homehot1,{
        params
      })
  },
  getHomtHot2(params){
      return axios.get(base.baseUrl + base.homehot2,{
        params
      })
  },

  /**
   * 城市列表
   */
   getCityLists(){
    return axios.get(base.cityUrl)
  },

  /**
   * 搜索列表
   */
  search(params){
    return axios.get(base.baseUrl+base.search,{
      params
    })
  },

  /**
   * 详情页
   */
  details(params){
    return axios.get(base.baseUrl+base.deatils,{
      params
    })
  },

  /**
   * 登录  有过错误 登录为post方式 
   */
  login(params){
    return axios.post(base.baseUrl + base.login,params)
  },

  /**
   * 评论
   */
  comment(params){
    return axios.get(base.baseUrl+base.comment,{
      params
    })
  },

  /**
   * 订单评论
   */
   commentOrder(params){
    return axios.get(base.baseUrl+base.commentOrder,{
      params
    })
  },

  /**
   * 提交评价
   */
  submitComment(params){
    return axios.post(base.baseUrl + base.submitComment,params)
  }
}

export default api;