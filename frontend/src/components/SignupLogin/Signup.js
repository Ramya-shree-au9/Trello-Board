import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import './SignupLogin.css'
import {Registerdata} from '../../Action/login'
import { Link } from 'react-router-dom'

const SignUp =(props)=> {
  const [Semail,setSemail] = useState()
  const [ Spsw,setSpsw] = useState()
  const [user,setUser] = useState()
  const [errorMessage,setErrorMessage] = useState()
  const [error,setError] = useState()

 
  useEffect(()=>{
    if(props.registerdata){
      if(props.registerdata.messages !== 'Registered Successfully'){
        setError(props.registerdata.messages)
      }else{
        props.history.push('/login')
      }
    }
    
  },[props.registerdata]) 

  useEffect(()=>{
    setError('')
    setErrorMessage('')
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
   
   const renderName=(e)=>{
      setUser(e.target.value)      
    }

   
    const submitSignup=()=>{ 
      if(Semail && Spsw && user){
        props.dispatch(Registerdata(user,Semail,Spsw))
        setError()
      }else{
        
        setError('Please fill all credential')
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
                <input type="text" className="form-control item" onChange={renderName} id="username" placeholder="Username"/>
            </div>
          
            <div className="form-group">
                <input type="text" className="form-control item"  onChange={renderSemail} id="email" placeholder="Email"/>
            </div>
            <span className='error'>{errorMessage}</span>
            <div className="form-group">
                <input type="password" className="form-control item" onChange={renderSpsw} id="password" placeholder="Password"/>
            </div>
          
           <div> <span className='error'>{error}</span></div>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account" onClick={()=>{submitSignup()}}>Sign up</button>
            </div>
            <div className="hr"></div>
                <div className="foot"> <label for="tab-1">Already Member?</label> </div>
                <div className="loginlink"><Link to='/login'> <label for="tab-1">Login</label></Link> </div>
        </form>
      
    </div>
    
    </React.Fragment>
    )
  }


function mapStateToProps(state){
    return{
        registerdata:state.Users.Rdata
    }
}
export default connect(mapStateToProps)(SignUp)


