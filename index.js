require ('dotenv').config()
const express = require('express');
const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req,res)=>{
    res.send("hello twiter")
})
app.get('/login',(req,res)=>{
    res.send('<h1>hello users to come for my website</h1>')
})
app.get('/, yotube',(req,res)=>{
    res.send('<h2>hello every one<h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})