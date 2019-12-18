const express = require ('express');
const mongoose = require ('mongoose');
const router = require('./routes/index');
//config vars
const port = process.env.PORT || 3000;

mongodb.set('useUnifiedTopology',true);
mongodb.set('useFindAndModify',false);
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sauchella:<password>@cluster0-pfie2.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

  
const app= express();
app.set('view engine','pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/', router);   
  




//listen
app.listen(port , () => {
 console.log(`server listening on port ${port}`);
});

