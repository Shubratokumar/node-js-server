const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send("This is my second attempth to run express js / node server with nodemon!!! Yea hooooooooo.")
})

// middleware 
app.use(cors());
app.use(express.json());

const users = [
    {id : 1 , name : "sabana", email : "sabana@gmail.com", phone : "01788888888"},
    {id : 2 , name : "shabnur", email : "shabnur@gmail.com", phone : "01788888888"},
    {id : 3 , name : "sraboni", email : "sraboni@gmail.com", phone : "01788888888"},
    {id : 4 , name : "shrabonti", email : "shrabonti@gmail.com", phone : "01788888888"},
    {id : 5 , name : "Sabila", email : "Sabila@gmail.com", phone : "01788888888"},
    {id : 6 , name : "sohana", email : "sohana@gmail.com", phone : "01788888888"},
    {id : 7 , name : "suchanda", email : "suchanda@gmail.com", phone : "01788888888"},
    {id : 8 , name : "sohini", email : "sohini@gmail.com", phone : "01788888888"}
]
app.get("/users",(req,res)=>{
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
    }
    else{
        res.send(users)
    }
})

app.get("/user/:id", (req, res)=>{
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user)
})

app.post("/user", (req, res)=>{
    console.log('request', req.body)
     const user = req.body;
     user.id = users.length + 1;
     users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res)=>{
    res.send(["Mango", "Apple", "Pineapple", "Jackfruits"])
}), 

app.get('/fruits/mango/fazli',(req,res)=>{
    res.send("Fazli mangos is largest size mangos in bangladesh.")
})

app.listen(port, ()=>{
    console.log(`listening the port from ${port}`)
})