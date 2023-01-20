const express = require("express");
const app = express();
const port = 3000;
//app.use(cors());
app.use(express.json());

app.get('/gettweet',(req,res)=>{
    res.send("HII this is working");
});


//app.use('/api/v1/auth',require('./routes/auth'));

app.use('/api/v1/twitter',require('./routes/gettop'));

app.listen(port,()=>{
    console.log(`App is running in ${port}`)
})