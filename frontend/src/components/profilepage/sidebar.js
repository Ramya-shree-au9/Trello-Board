import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { storage } from "./firebaseConfig";


const Sidebar = (props) => {
  const { ldata, logoutrender, callbackforprofileimgupload } = props;
  const [formaterr, setformaterr] = useState("");
  const inputFile = useRef(null);
  

  const imageselector = () => {
    inputFile.current.click();
  };

  const fileupload = (e) => {
   
    if (e.target.files[0]) {
      
      let filename = e.target.files[0].name.split(".");
      let fileextension = filename[filename.length - 1];
      if (fileextension === "jpg" || fileextension === "jpeg") {

        const uploadTask = storage
          .ref(`images/${e.target.files[0].name}`)
          .put(e.target.files[0]);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(e.target.files[0].name)
              .getDownloadURL()
              .then((url) => {
               
                callbackforprofileimgupload(url, props.ldata.data._id);
              });
          }
        );
        setformaterr("");
      } else {
        
        setformaterr("Upload only jpg format");
      }
    }
  };

  return (
    <>
      <div className="d-flex sidetop">
        <div className="proimg">
          <img src={ldata.data.image} alt=''/>
         
          <span
            onClick={imageselector}
            className="material-icons profileimguploadcamera"
          >
            <i class="fas fa-camera"></i>
          </span>
        </div>
        <input
          onChange={fileupload}
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
        />
        <div>
          <p>Hello,</p>
          {ldata.data.givenName.length > 10?
          <h6>{ldata.data.givenName.slice(0,9)}...</h6>:
          <h6>{ldata.data.givenName}</h6>}
        </div>
      </div>
      <small style={{color:"red"}}>{formaterr}</small>
      <div className="sidebottom mt-3">
       
        <div>
          <Link className="nav-link " to='/profile' style={{ textDecoration: "none" }}>
            <i className="fas fa-user-circle mr-3"></i>
            <span className="ordercolor">
              My Profile<i className="fas fa-chevron-right arrowright pt-1"></i>
            </span>
          </Link>
        </div>
        <hr />
        <div>
          {" "}
          <Link
          to="/"
            className="nav-link "
            style={{ textDecoration: "none" }}
            onClick={logoutrender}
          >
            <i className="fas fa-sign-out-alt mr-3"></i>
            <span className="ordercolor">Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};



export default Sidebar
