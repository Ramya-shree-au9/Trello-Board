import mongoose from "mongoose";

const todolist = mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        cards:[
            {
            text:{
                type:String
            }
            }
        ]
    })

const Trello = mongoose.model("trello", todolist);

export default Trello;
