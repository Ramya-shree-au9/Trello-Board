import React,{useState} from 'react'
import './trello.css'
import Trello_card from './trello_card'
import Addbutton from './addbutton'
import {Droppable} from 'react-beautiful-dnd'

export const Trello_list = (props) => {
    const {title,id,cards,addcards,deletelist,deletecard,edittitleintodo} = props
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
        edittitleintodo(edittext,e.target.id,'list')
        }else{
            setErr('Enter valid title')
        }
        
    }


    const deletetitle=(e)=>{
        e.preventDefault()
        deletelist(id)
    }

    return (
        <>
       
        <Droppable droppableId={id} >
             {(provided) => (
                <div key={id} className='todohead' 
                {...provided.droppableProps} 
                ref={provided.innerRef}>
                    <div className='listhead'>
                   
                     {edit?<div className='cardeditrender'>
                         <input  defaultValue={title}  onChange={editTextrender}></input>
                         <p className='errinbtn'>{err}</p>
                         <div className='cardsicon'>
                         <button id={id} onClick={(e)=>savetextrender(e)} className='btn btn-success addcardbtn'>Save</button>
                    <div className='cancelbtncard' onClick={cancelrender}>
                    <i class="fas fa-times"></i>
                </div>
                </div>
                     </div>:
                     <>
                <h4 className='titlehead'>{title}</h4>
                <div className='listicon'><i id={id} onClick={(e)=>edittitle(e)} class="far fa-edit"></i>
                    <i id={id} onClick={(e)=>deletetitle(e)} class="far fa-trash-alt"></i></div>
                    </>}
                </div>
                <hr/>
                {cards.map((data,idx)=>{
                    return(
                        <>
                     <Trello_card key={data._id} 
                     text={data.text} id={data._id}
                      index={idx} deletecard={deletecard} edittitleintodo={edittitleintodo}/>
                      </>
                    )
                })}
                   <Addbutton list='card' id={id} addcards={addcards}/>
                   {provided.placeholder}
                </div>
             )}
        </Droppable>
              
        </>
    )
}

export default Trello_list