'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getBooks = require('./modules/handlers');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECT);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected to Atlas!!')
});

app.get('/books', getBooks)
app.get('/test', (request, response) => {

  response.send('test request received')

})

app.use( (error, request, response, next ) => {
  response.status(500).send(`My Bad! Error occured in server! Someone call the developer... ${error.message}`);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
