import React from 'react'

const profile = (props) => {
    const{fnameRender,fname,mailRender,emailid,editRender,disable,
        saveRender,ferr,emaerr,aerr, 
    }=props
  return (
    <div className="rightsection">
        <h5 className='sechead'>Personal Information</h5>
        <h5 className='sechead'>Name</h5>
      <div  className='d-flex'>
      <div className="form-group">
        <div className="inputBox control-label col-sm-2">
            <input  type="text" name="fname" disabled={disable} required onChange={(e)=>fnameRender(e)} value={fname}/>
       
          </div>                                        
      </div>
     
    </div>
    <p className='errmsg'>{ferr}</p>
   
    <h5 className='sechead'>Email Address</h5>
    <div className="form-group">
        <div className="inputBox control-label col-sm-2">
            <input type="email" name="email" disabled={disable}  required onChange={(e)=>mailRender(e)} value={emailid}/>
            
          </div>
      </div>
      <p className='errmsg'>{emaerr}</p> 
    
     
      <p className='errmsg'>{aerr}</p>

      {disable &&
      <button className='btn btn-primary ml-3 ' onClick={editRender}>Change/Edit</button>}
      {!disable &&
      <button className='btn btn-primary ml-3 ' onClick={saveRender}>Save</button>}
      
    </div>
    
  )
}

export default profile
