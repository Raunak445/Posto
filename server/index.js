const express = require('express')

// instance of express framework
// note i wrote request instead of require causing it error to start

const app =express()


const cors= require('cors')
// app is an intance of express 
// above two lines of code is awalys there 


const db= require("./models")

app.use(express.json())
//this is for express to allow posting json 

app.use(cors())

app.set('json spaces', 2)

// above line to return json in readable format

//Note this cors is a function 




// this is done to so that json of the body is parsed 




// Routers 

const postRouter=require('./routes/Posts')
app.use("/posts",postRouter) 







db.sequelize.sync().then(()=>{
        app.listen(3001,()=>
        {
                console.log("server on port 3001 is running ")
        })
})



// EXPRESS 

