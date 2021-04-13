
import React,{useEffect} from "react"
// import './Navbar.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {userinfo} from '../Action/login'

const Nav= (props)=>{
  
    useEffect(() => {
       props.dispatch(userinfo())
    }, [])

    const renderlogout=()=>{
    localStorage.removeItem("token");
    props.dispatch({
        type:'LOGIN',
        payload:'' 
    })
    }

    const signuppart=()=>{
    if(props.logindata && props.logindata.data){
            return(<><li className="nav-item "><div className="username ml-4 ft text-white">{props.logindata.data.givenName}</div></li>
             <li> <Link to="/profile" className=" ml-4 ft text-white" style={{textDecoration:'none'}}>Profile</Link></li>
            <li className="nav-item "><Link className=" ml-4 ft text-white" style={{textDecoration:'none'}} onClick={renderlogout}>Logout</Link></li></>)
        
    }
    else {
        return(<><li className="nav-item "><Link to="/" className=" ml-4  ft text-white" style={{textDecoration:'none'}}>SignUp</Link></li> 
       <li> <Link to="/login" className=" ml-4 ft text-white" style={{textDecoration:'none'}}>Login</Link></li></>)
    }               
    }

  return (
    <div className=" p-0 " style={{marginBottom:"60px"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      <div className="navmain">
        <h3 className="navbar-brand ml-4 navmain text-white">Trello board</h3>
      </div>

        <button
            className="navbar-toggler ml-4"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
   
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 sellerheder">
              <li className="nav-item">
               <Link to='/home' className=" ml-4 ft text-white" style={{textDecoration:'none'}}>Home</Link> 
              </li>
              {signuppart()}
              </ul>
              </div>    
      </nav>  
    </div>
  )
}

function mapStateToProps(state){
    return{
       logindata:state.Users.Ldata
    }
}

export default connect(mapStateToProps)(Nav)

