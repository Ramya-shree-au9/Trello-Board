import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'
import ConnectDB from "./db.js"
import dotenv from 'dotenv'
import UsersRoute from './Routes/user.js'
import TodoRoute from './Routes/todo.js'
import path from 'path'

dotenv.config()
ConnectDB()
const app= express()
const port = process.env.PORT || 3001
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

app.use('/api/users',UsersRoute)
app.use('/api/todo',TodoRoute)

const __dirname= path.resolve()

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/build")))

    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"frontend","build","index.html"))
    })
}else{
    app.get("/",(req,res)=>{
        res.send("api is running")
    })
}

app.listen(port,(err)=>{
    if(err) throw err
    console.log(`server running on .. ${port}`)
})