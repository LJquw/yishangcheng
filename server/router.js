const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot");
// const searchData = require("./data/search")
const detailDate = require("./data/details")
const url=require("url");
const Mock=require('mockjs');
const Random=Mock.Random;
const commentData=require("./data/comment");
const orderCommentData=require("./data/order")

/**
 * 首页热门数据
 */
router.get("/home/hot1",(req,res) =>{
    const cityName= url.parse(req.url,true).query.cityName
    res.send({
        status:200,
        result:homehot.hot1,
        city:cityName
    })
})

router.get("/home/hot2",(req,res) =>{
    const cityName=url.parse(req.url,true).query.cityName
    res.send({
        status:200,
        result:homehot.hot2,
        city:cityName
    })
})

/**
 * 搜索页面
 */
router.get("/search",(req,res)=>{
    const search=url.parse(req.url,true).query.search
    console.log(search);
    let data=Mock.mock({
        hasMore:true,
        'data|5':[{
            "id|+1":Random.integer(),
            title: Random.csentence(5, 8),
            houseType: "17/19层| 4室1厅 - 273.97 ㎡",
            price: "<h3>130000</h3>",
            rentType: Random.cword(2),
            img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5))
        }]
    })
    res.send({
        status:200,
        result:data
    })
})

/**
 *  mock测试
 */
router.get("/mock",(req,res)=>{
    let data=Mock.mock({
        'data|5':[{
            "id|+1":Random.integer(),
            title: Random.csentence(5, 8),
            houseType: "17/19层| 4室1厅 - 273.97 ㎡",
            price: "<h3>130000</h3>",
            rentType: Random.cword(2),
            img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5))
        }]
    })
    res.send({
        status:200,
        result:data
    })
})

/**
 *  详情页
 */
router.get('/details',(req,res)=>{
    const id=url.parse(req.url,true).query.id;
    console.log(id);
    res.send(detailDate)
})

/**
 * 登录
 */
 router.post("/login",(req,res) =>{
    const { username,password } = req.body;
    console.log(username,password);
    if(username && password){
        res.send({
            status:200,
            token:"xdwuu378343bkc.727v3fjdnin0.bdjwb28h2djkd",
            nick:username
        })
    }else{
        res.send({
            status:400,
            msg:'用户名密码错误'
        })
    }
})

/**
 * 评论
 */
router.get("/comment",(req,res)=>{
    const id=url.parse(req.url,true).query.id
    console.log(id);
    res.send({
        status:200,
        result:commentData
    })
})

/**
 * 订单评价
 */

router.get("/order/comment",(req,res)=>{
    const username=url.parse(req.url,true).query.username
    console.log(username);
    res.send({
        status:200,
        result:orderCommentData
    })

})

/**
 * 评价
 */
router.post("/order/comment/submit",(req,res)=>{
    // const username=url.parse(req.url,true).query.username
    // const id=url.parse(req.url,true).query.id
    const {username,id,content}=req.body
    console.log(username,id,content);
    res.send({
        msg:'评价成功',
        status:200
    })
})


module.exports = router;