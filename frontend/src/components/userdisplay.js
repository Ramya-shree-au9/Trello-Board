import React from 'react'

export const Userdisplay = (props) => {

    const details=(users)=>{
        // console.log("hj",users)
        if(users){
        return users.map(item=>{
          return(
            <>
            <tbody>
              <tr>
                <td>{item.givenName}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{`${item.isActive}`}</td>
                <td><span className='icon' ><i  class="fas fa-trash-alt"></i></span> 
                      <span data-toggle="modal" data-target="#mModal"> <i class="fas fa-edit"></i></span>
                     </td>
              </tr>
            </tbody>
          
            </>
          ) 
        })
      }}

    return (
        <div>
             <div className='container'>
            <h2 >User Details</h2>
            <div class="table responsive ">
                <table class="table  table-hover table-striped" >
                <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
                </thead>
               {details(props.users)}
                </table>
        </div>
        </div>
        </div>
    )
}

export default Userdisplay
