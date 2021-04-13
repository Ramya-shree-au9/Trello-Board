import React,{useState,useEffect} from 'react'
import ProfileDisplay from './profileDisplay'
import { toast } from 'react-toastify';

const ProfileDetail = (props) => {
  const [fname,setFname]=useState('')
  const [email,setEmail]= useState("")
  const [ferr,setFerr] = useState('')

  const [emaerr,setEmaerr] = useState('')
  const [aerr,setErrall] = useState('')
  const [disable,setDisable] = useState(true)



useEffect(()=>{
    setFname(props.ldata.data.givenName)
    setEmail(props.ldata.data.email)
    setEmaerr('')
},[])

useEffect(()=>{
    if(props.ldata.message === 'Update Successfully'){
      toast(props.ldata.message,{
        autoClose: 2000
      })
      setDisable(true)
    }else if(props.ldata.message !== 'Login Successfully'){
      setEmaerr(props.ldata.message)
    }
},[props.ldata])

  const fnameRender=(e)=>{
    if(e.target.value.length < 3){
      setFerr('Name should be atleast 3 characters')
    }else{setFerr('')}
    setFname(e.target.value)
  }
  
 

  const mailRender=(e)=>{
    if ((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(e.target.value)) {
      setEmaerr('')
    }else{
      setEmaerr('Please enter valid email') 
    }
    setEmail(e.target.value)
   }

  const editRender=(e)=>{
    setDisable(false) 
  }


  const saveRender=(e)=>{
    if(ferr || emaerr ){
      setErrall("Fill valid adress")
    } 
   else{
        setErrall('')
        props.update(fname,email)
        }      
}



  return (
    <>
      <ProfileDisplay fnameRender={fnameRender}
      fname={fname} 
      mailRender={mailRender} emailid={email} 
      editRender={editRender} disable={disable}
      saveRender={saveRender} emaerr={emaerr} aerr={aerr}
      ferr={ferr} 
      />
    </>
  )
}


export default ProfileDetail

