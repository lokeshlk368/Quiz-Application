const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/quiz_application_db');
const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connection to db'));

db.once('open',function(){
 console.log("Successful connection to database");
});