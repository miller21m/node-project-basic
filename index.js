const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const userRouter = require('./routers/user');


const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(userRouter);

if(process.env.NODE_ENV === 'production'){
    //Static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req, res)=>res.sendFile(__dirname + '/public/index.html'));
}


app.listen(port, ()=>{
    console.log('Server is up on port  ' + port);
})