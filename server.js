const express = require ('express');
const mongoose = require ('mongoose');
const router = require('./routes/index');
//config vars
const port = process.env.PORT || 3000;

const db = process.env.MONGODB_URI||'mongodb+srv://sauchella:<password>@cluster0-pfie2.mongodb.net/test?retryWrites=true&w=majority
';


//db connection
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then (() =>{
  console.log(`DB connected in port ${port}`);
  })
  .catch(err => console.error(`Connection error ${err}`));
  
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

