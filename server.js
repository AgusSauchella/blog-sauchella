const express  = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');


// config vars
const db   = process.env.MONGODB_URI || 'mongodb://localhost/blog-sauchella';
const port = process.env.PORT        || 3000;

const app = express();

// db connection
const URI = 'mongodb+srv://dbfahad:dbfahad@cluster0-l6cmf.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.Promise = global.Promise

const connectDB = async () => {
mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
console.log('DB Connected....');
}

module.exports = connectDB
// set views
app.set('view engine', 'pug');
app.set('views', './views');


// set routes
app.use('/', router);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
