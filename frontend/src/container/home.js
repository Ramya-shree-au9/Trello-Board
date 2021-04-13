import React,{useEffect} from 'react'
// import Trello from '../components/Home/trello'
import Todolist from '../components/Home/trello_list'
import {connect} from 'react-redux'
import {DragDropContext} from 'react-beautiful-dnd'
import Addbutton from '../components/Home/addbutton'
import {tododata,addtodolist,addtodocard,removetodoList,
    removetodoCard,editTitleCard,editTitleList,sort} from '../Action/todo'
// import {} from '../Action/listaction'

export const Home = (props) => {

    useEffect(()=>{
        if(props.ldata){
            if([localStorage.getItem("token")].includes(null, undefined) || !props.ldata.data){
                props.history.push('/login')
            }
            else if(props.ldata && props.ldata.data){
                props.dispatch(tododata())
            }
        }else if([localStorage.getItem("token")].includes(null, undefined)){
            props.history.push('/login')
        }
        
        
    },[props.ldata,props.todolist])


  const handleOnDragEnd=async(result)=>{
      const {destination,source,draggableId} = result
    console.log(destination,source,draggableId)
    if (!destination){
        return
    } 
    await props.dispatch(sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
        ))
    await props.dispatch(tododata())
    
    }

    const edittitleintodo=async(title,id,name)=>{
        if(name === 'card'){
           await props.dispatch(editTitleCard(title,id))
           await props.dispatch(tododata())
        }else{
           await props.dispatch(editTitleList(title,id))
           await props.dispatch(tododata())
        }
    }
    const deletelist=async(id)=>{
       await props.dispatch(removetodoList(id))
       await props.dispatch(tododata())
    }
    const deletecard=async(id)=>{
       await props.dispatch(removetodoCard(id))
       await props.dispatch(tododata())
    }

    const addcards=async(title,id)=>{
        if(id === '0'){
          await props.dispatch(addtodolist(title))
          await props.dispatch(tododata())
        }else{
           await props.dispatch(addtodocard(title,id))
           await props.dispatch(tododata())
        }
    }
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className='todolistcontainer'>
          <div className='todolistcontainer divwidth'>
            {props.todolist && props.todolist.map((item,idx)=>{
                return(
            <Todolist todolist={props.todolist} key={item._id} index={idx} title={item.title} id={item._id} 
            cards={item.cards} addcards={addcards} 
            edittitleintodo={edittitleintodo} 
            deletelist={deletelist} deletecard={deletecard}/>
                )
            })}
            </div>
            <div  className='todohead2'>
            <Addbutton list='list' id={''} addcards={addcards}/>
            </div>
        </div>
        </DragDropContext>
    )
}



function mapStateToProps(state){
    return{
        todolist:state.todo.tododata,
        ldata: state.Users.Ldata,
        sort:state.todo.sortdata
    }   
}
export default connect(mapStateToProps)(Home)

 
