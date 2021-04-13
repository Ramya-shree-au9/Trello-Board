import Trello from '../models/trello.js'

export const addTodoList =async(req,res)=>{
    Trello.create(
        req.body,(err, user) => {
            res.status(200).send(user)
        }
    )
}


export  const allListInTrello = async(req,res)=>{
    try {
        const trelloList = await Trello.find();
        res.status(200).send(trelloList);
      } catch (err) {
        res.status(404);
      }
}



export const deleteList =async(req,res)=>{
    try {
        Trello.findByIdAndDelete({_id:req.params.id},
       (err,result)=>{
            res.status(200).send(result)  
      })
    }
       catch {
        res.status(404).send(err)
      }
}

export const updateList =async(req,res)=>{
    try {
        Trello.findByIdAndUpdate(req.body.id,{
            title:req.body.title
        },
       (err,result)=>{
            res.status(200).send(result)  
      })
    }
       catch {
        res.status(404).send(err)
      }
}

export const addTodoCards =async(req,res)=>{
    const id=req.params.id
    try {
        Trello.findByIdAndUpdate(id,
        {$push: {"cards": req.body}},
        {new: true,upsert:true},(err,data)=>{
            res.status(200).send({data:data}) 
      })
      } catch {
        res.status(404).send(err)
      }
}

export const deleteCards =async(req,res)=>{
    try {
        Trello.findOneAndUpdate({'cards._id':req.params.id},
        {$pull:{cards:{_id:req.params.id}}},{ safe: true },
       (err,result)=>{
            res.status(200).send({data:result})  
      })
    }
       catch {
        res.status(404).send(err)
      }
}

export const updateCards =async(req,res)=>{
    try {
        Trello.findOneAndUpdate({'cards._id':req.body.id},
         {$set: {'cards.$.text': req.body.text}},
        {new: true},(err,result)=>{
            res.status(200).send({data:result}) 
      })
    }
       catch {
        res.status(404).send(err)
      }
}


export const sortCards =async(req, res) => {
  try {
     const {droppableIdStart,droppableIdEnd,
          dropableIndexStart,
          dropableIndexEnd} =  req.body
          var listStart
          var listEnd
          var lis
      const trellolist = await Trello.find()
      if(droppableIdStart === droppableIdEnd){
       
        trellolist.map(item=>{
         if(droppableIdStart == item._id){  
          return(lis = item)
          }
        })

        const card = lis.cards.splice(dropableIndexStart,1)
        lis.cards.splice(dropableIndexEnd,0, ...card)
        await lis.save()
      }
      if(droppableIdStart !== droppableIdEnd){ 
        trellolist.map(item=>{
          if(droppableIdStart == item._id){
  
              return(listStart = item)
          } })
        const card = listStart.cards.splice(dropableIndexStart,1)
        await listStart.save()
      
        trellolist.map(list=>{
          if(droppableIdEnd == list._id){
              return(listEnd = list)
          } })   
        listEnd.cards.splice( dropableIndexEnd,0, ...card)
        await listEnd.save()
      }
    
    } 
    catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }


}