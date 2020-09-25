const mongoose = require("mongoose");
require('dotenv/config');

const dbConfig = process.env.MONGODB_URI || 'mongodb://localhost/workoutdb';


async function connectDB(){
  await mongoose.connect(dbConfig,{
      useNewUrlParser: true,
      useUnifiedTopology: true  
  }, () =>  
  console.log('Connected to DB')
);
}

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Kathicks387:<password>@cluster0.0fvf3.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = connectDB;