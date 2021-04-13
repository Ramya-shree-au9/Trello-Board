import React,{useEffect} from 'react'
import Users from '../components/userdisplay'
import {connect} from 'react-redux'
import {userdata} from '../Action/login'

export const Login = (props) => {

    useEffect(() => {
        props.dispatch(userdata())
    }, [props.usersdata])

// console.log(props)
    return (
        <div>
            <Users users={props.usersdata}/>
        </div>
    )
}

function mapStateToProps(state){
    return{
        usersdata:state.Users.allusers    
    }   
}
export default connect(mapStateToProps)(Login)
