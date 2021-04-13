import axios from "axios";
const url = "http://localhost:3001/api/users";

export function Registerdata(fname, mail, psw) {
  const output = axios.post(`${url}/register`, {
    firstname: fname,   
    email: mail,
    password: psw,
  });
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "REGISTER",
          payload: data,
        });
      });
    }; 
}

export function Logindata(mail,psw) {
  const output = axios.post(`${url}/login`, {
    email: mail,
    password:psw
  });
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "LOGIN",
          payload: data,
        });
      });
    }; 
}

export function userinfo() {
  const token = localStorage.getItem('token')
  console.log(token)
  const output = axios.get(`${url}/userinfo`, {
    headers: { "x-access-token": token },
  });
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "LOGIN",
          payload: data,
        });
      });
    }; 
}

export function userdata() {
  const output = axios.get(`${url}/userdata`);
    return (dispatch) => {
      output.then(({ data }) => {
        dispatch({
          type: "ALLUSERS",
          payload: data,
        });
      });
    }; 
}

export function ProfileUpdate(
  fname,
  mail,
  oldemail
) {
  const output = axios.patch(`${url}/profileedit`, {
    givenName: fname,
    email: mail,
    oldemail: oldemail,
  });
  return (dispatch) => {
    output.then(({ data }) => {
      dispatch({
        type: "LOGIN",
        payload: data,
      });
    });
  };
}

export function uploadprofileimg(Url, id) {
  const output = axios.patch(
    `${url}/imgedit`,
    { Url, id }
  );

  return (dispatch) => {
    output.then(({ data }) => {
      dispatch({
        type: "LOGIN",
        payload: data,
      });
    });
  };
}


