import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../pages/Main/Home'
import LifeService from '../pages/Main/LifeService'
import Shop from '../pages/Main/Shop'
import User from '../pages/Main/User'
import BottomNav from '../components/BottomNav'
import City from '../pages/City'
import Layout from '../pages/Main/Layout'
import Search from '../pages/Search'
import Details from '../pages/Details'
import Login from '../pages/Login'
import Order from '../pages/Order'


const AppRouter=()=>{
  return (
    <Router>
      <Switch>
        <Route path="/city" component={City}></Route>
        <Route path="/search/:keyworlds" component={Search}></Route>
        <Route path="/details/:id" component={Details}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/order" component={Order}></Route>
        <Layout path="/">
          <BottomNav/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/life" component={LifeService}></Route>
            <Route path="/user" component={User}></Route>
          </Switch>
        </Layout>
      </Switch>
    </Router>
  )
}

export default AppRouter;