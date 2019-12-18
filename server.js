const express = require ('express');
const mongoose = require ('mongoose');
const router = require('./routes/index');
//config vars
const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI||'mongodb://localhost/blog-sauchella';



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sauchella:blog@cluster0-pfie2.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




//listen
app.listen(port , () => {
 console.log(`server listening on port ${port}`);
});

