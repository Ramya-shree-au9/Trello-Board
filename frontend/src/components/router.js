import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Register from './SignupLogin/Signup'
import Login from './SignupLogin/Login'
import Users from '../container/userdisplay'
import Header from './header'
import Profile from '../container/Profile'
import Home from '../container/home'

const Routing = ()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path='/' component={Register}/>    
        <Route exact path='/login' component={Login}/>    
        <Route exact path='/users' component={Users}/> 
        <Route exact path='/profile' component={Profile }/> 
        <Route exact path='/home' component={Home }/> 
        </BrowserRouter>
    )
}

export default Routing