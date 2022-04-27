'use strict'
const http = require('http');
const express = require('express');
const app = express();

const productos = require('./routes/product.routes');

app.use('/products',productos);

const httpServer = http.createServer(app);
httpServer.listen(3080,()=>{
    console.log('sever started');
})
