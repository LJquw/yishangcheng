import React,{useState} from "react";
import classnames from "classnames";
import validator from "../../../utils/validator"
import "./style.less";
import api from "../../../api";

const LoginView=(props)=>{
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [errors,setErrors]=useState({})

  function changeHandle(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value)
    }
    if (e.target.name === "password") {
      setPassword(e.target.value)
    }
  }

  function onSubmitHandle(e){
    e.preventDefault();

    var {isValid,errors}=validator({
      username,
      password
    })
    if(!isValid){
      api.login({
        username,
        password
      }).then(res=>{
        if(res.data.status===200){
          // 登录成功
          props.onLoginEvent(res.data)
          setErrors({})
        }else{
          // 登录失败
          console.log("登录失败");
        }
      })
    }else{
      setErrors(errors)
    }
  }

  return (
    <div id="login-container">
      <form onSubmit={onSubmitHandle}>
        <div className={ classnames('input-container phone-container',{ 'input-container-error':errors.username }) }>
          <i className="icon-tablet"></i>
          <input type="text" placeholder="用户名/手机号" name="username" value={username} onChange={changeHandle} />
        </div>
        <div className={ classnames('input-container password-container',{ 'input-container-error':errors.password })}>
          <i className="icon-key"></i>
          <button>发送验证码</button>
          <input type="password" placeholder="输入验证码" name="password" value={password} onChange={changeHandle} />
        </div>
        <button className="btn-login">登录</button>
      </form>
    </div>
  )
}

export default LoginView;