import React,{useState} from 'react'

export const Addbutton = (props) => {
    const [addtext,setText] = useState(false)
    const [cardtext,setCardText] = useState('')
    const [err,setErr] = useState('')

    const addTodoren=()=>{
        if(cardtext){
            setErr('')
            setText(false)
        if(props.id){
            props.addcards(cardtext,props.id)
        }else{
            props.addcards(cardtext,'0')
        }
    }else{
        setErr('Enter Valid title')
    }
    }

    const rendercontent = (props.list === 'list')?'Add Todo':'Add Cards'
    const Addcardrender = (props.list === 'list')?<div onClick={addTodoren}>Add Todo</div>:<div onClick={addTodoren}>Add Card</div>

    const buttonrender=()=>{
        setText(true)
    }

    const cancelrender=()=>{
        setText(false)
    }
    const carddetailrender=(e)=>{
        setCardText(e.target.value)
    }

    return (
        <div>
            {addtext?
            <div>
                <textarea className='inputbtnadd' onChange={carddetailrender}></textarea>
                <p className='errinbtn'>{err}</p>
                <div className='bottomicon'>
                <button className='btn btn-success addcardbtn'>{Addcardrender}</button>
                <div className='cancelbtncard' onClick={cancelrender}>
                <i class="fas fa-times"></i>
                </div>
                </div>
            </div>:
             <h5 className='mt-2 p-2 addcardsbtn text-primary'  onClick={()=>buttonrender()}>
                 <i className="fas fa-plus mr-3"></i>{rendercontent}</h5>}
        </div>
    )
}

export default Addbutton
