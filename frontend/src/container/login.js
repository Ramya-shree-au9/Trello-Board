import React from 'react'
import Rigister from '../components/register'
import {connect} from 'react-redux'
import {Registerdata} from '../Action/login'

export const Login = (props) => {
    const register=(n,e,p)=>{
        console.log('object')
        props.dispatch(Registerdata(n,e,p))
    }

// console.log(props)
    return (
        <div>
            <Rigister register={register} props={props}/>
        </div>
    )
}

function mapStateToProps(state){
    return{
        data:state.Users.Rdata    
    }   
}
export default connect(mapStateToProps)(Login)
