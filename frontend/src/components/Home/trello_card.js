import React,{useState} from 'react'
import {Draggable} from 'react-beautiful-dnd'

export const Trello_card = (props) => {
    const {text,id,index,deletecard,edittitleintodo}= props
    const [edit,setedit]= useState(false)
    const [edittext,setedittext]= useState(false)
    const [err,setErr] = useState('')
 
    const editTextrender=(e)=>{
        setedittext(e.target.value)
    }

    const edittitle=()=>{
        setedit(true)
    }

    const cancelrender=()=>{
        setedit(false)
    }

    const savetextrender=(e)=>{
        if(edittext){
            setedit(false)
        edittitleintodo(edittext,e.target.id,'card')
        }else{
            setErr('Enter valid title')
        }
        
    }

    const deletetitle=(e)=>{
        e.preventDefault()
        deletecard(id)
    }

    return (
        <Draggable key={id} draggableId={id} index={index}>
             {(provided) => (
                 <div className='listhead '>
                     {edit?<div className='cardeditrender'>
                         <input  defaultValue={text}  onChange={editTextrender}></input>
                         <p className='errinbtn'>{err}</p>
                         <div className='cardsicon'>
                         <button id={id} onClick={(e)=>savetextrender(e)} className='btn btn-success addcardbtn'>Save</button>
                    <div className='cancelbtncard' onClick={cancelrender}>
                    <i class="fas fa-times"></i>
                </div>
                </div>
                     </div>:
                     <>
                      <p ref={provided.innerRef} {...provided.draggableProps} 
                      {...provided.dragHandleProps} key={id} className='cardinputs'>
                          {text}</p>
                            
                          <div className='listicons '><i id={id} onClick={(e)=>edittitle(e)} class="far fa-edit"></i>
                    <i id={id} onClick={(e)=>deletetitle(e)} class="far fa-trash-alt"></i></div>
                    </>}
                </div>
                
           

             )}
        </Draggable>
    )
}

export default Trello_card
