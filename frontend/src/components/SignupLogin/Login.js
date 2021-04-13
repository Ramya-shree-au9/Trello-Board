import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import './SignupLogin.css'
import {Logindata} from '../../Action/login'
import { Link } from 'react-router-dom'

const SignUp =(props)=> {
  const [Semail,setSemail] = useState()
  const [ Spsw,setSpsw] = useState()
  const [errorMessage,setErrorMessage] = useState()
  const [error,setError] = useState()

  useEffect(()=>{
    if(props.logindata){
      if(props.logindata.messagep !== 'Login Successfully'){
        setError(props.logindata.messagep)
      }
      else{
        props.history.push('/home')
        localStorage.setItem('token',props.logindata.token)
      }
    }
    
  },[props.logindata]) 

  useEffect(()=>{
    setSemail('')
    setSpsw('')
    setErrorMessage('')
    setError('')
  },[])
   
  

    const renderSemail=(e)=>{
      if ((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(e.target.value)) {
        setSemail(e.target.value)
        setErrorMessage('')
      } else {
        setErrorMessage('Please enter correct email adress')
      }   
    }

    const renderSpsw=(e)=>{ 
      setSpsw(e.target.value) 
        
    }

   
    const submitLogin=()=>{ 
      if(Semail && Spsw){
        props.dispatch(Logindata(Semail,Spsw))
        setError()
      }else{
        setError('Please fill both field')
      }
    }

  
  
    return (
        <React.Fragment>
        <div className="registration-form">
        <form>
            <div className="form-icon">
                <span><i className="fas fa-user"></i></span>
            </div>
    
            <div className="form-group">
                <input type="text" className="form-control item"  onChange={renderSemail} id="email" placeholder="Email"/>
            </div>
            <span className='error'>{errorMessage}</span>
            <div className="form-group">
                <input type="password" className="form-control item" value={Spsw} onChange={renderSpsw} id="password" placeholder="Password"/>
            </div>
          
           <div> <span className='error'>{error}</span></div>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account" onClick={()=>{submitLogin()}}>Sign in</button>
            </div>
            <div className="hr"></div>
                <div className="foot"> <label for="tab-1">New User?</label> </div>
                <div className="loginlink"><Link to='/'> <label for="tab-1">Register</label></Link> </div>
        </form>
      
    </div>
    
    </React.Fragment>
    )
  }


function mapStateToProps(state){
    return{
        logindata:state.Users.Ldata
    }
}
export default connect(mapStateToProps)(SignUp)


