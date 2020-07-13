const express = require('express');
const port = 8000;
const app  = express();
const jwtStratery = require('./config/jwt-strategy');
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use('/',require('./router/index'));

app.listen(port,function(error){
    if(error){
        console.log('error in server');
    }else{
        console.log('server is running on port:',port);
    }

});