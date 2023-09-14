require('dotenv').config()
const mongoose = require('mongoose');

exports.connectMonggose =()=>{
  mongoose.connect(process.env.DATABASE_URL,
  {
      useNewUrlParser: true
  })
  .then((e)=>console.log(" Hi Upkar Connected to Mongodb =>> CSV Upload"))
  .catch((e)=>console.log("Hi Upkar Not Connect Mongodb"))
}


// const db = mongoose.connection;
// db.on('error', console.error.bind('error in connecting to the db'));
// db.once('open', function(){
//   console.log('Successfully connected to the DB');
// })