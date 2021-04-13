import React, { useEffect } from "react";
import Sidebar from "../components/profilepage/sidebar";
import ProfileDisplay from "../components/profilepage/profileDetail";
import { connect } from "react-redux";
import "../components/profilepage/profilepage.css";
import {
  ProfileUpdate,
  uploadprofileimg,
  userinfo
} from "../Action/login";
import { withRouter, useHistory } from "react-router-dom";



const Profile = (props) => {

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
    props.dispatch(userinfo())
  },[])
  
  let history = useHistory();
  const logoutrender = () => {
    localStorage.removeItem("token");
    props.dispatch({
      type: "LOGIN",
      payload:""
    });
    props.history.push("/");
  };


  useEffect(() => {
    if(props.ldata){
    if ([localStorage.getItem("token")].includes(null, undefined) || !props.ldata.data) {
      history.push("/");
    } 
  }
  }, [props.ldata]);

  const updatedata = (fname, email) => {
    props.dispatch(
      ProfileUpdate(
        fname,
        email,
        props.ldata.data.email
      )
    );
  };

  const callbackforprofileimgupload = (url, id) => {
    props.dispatch(uploadprofileimg(url, id));
  };

  if (props.ldata && props.ldata.data) {
 
      return (
        <div className="container mb-5 profilesection">
          <div className="row">
            <div className="col-lg-3 col-md-3 ">
              <Sidebar
                ldata={props.ldata}
                logoutrender={logoutrender}
                callbackforprofileimgupload={callbackforprofileimgupload}
              />
            </div>

            <div className="col-lg-9 col-md-9 ">
              <ProfileDisplay
                ldata={props.ldata}
                update={(a, b, c, d, e) => updatedata(a, b, c, d, e )}
              />
            </div>
          </div>
        </div>
      );
  } else {
    return (
      <div className='loader'><img src='https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif' alt=''/></div>
    );
  }
};

function mapStateToProps(state) {
  return {
    ldata: state.Users.Ldata,
  };
}

export default withRouter(connect(mapStateToProps)(Profile));
