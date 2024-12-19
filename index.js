import express from "express"

const app = express()

app.get('/',(req,res) =>{
    res.status(200).json({message:"This is the home page"})
})

app.get('/about',(req,res) => {
    res.status(200).json({message:"This is about page"})
})

let port = 8080
app.listen(port, console.log(`Server is running to port ${port}`))