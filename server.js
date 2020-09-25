const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan');
const path = require('path')
const fs = require('fs');
require('dotenv/config');
const connectDB = require('./config/connectDB.js');

const db = require('./models');

//middleware & static files
app.use(logger("dev"));
app.use(express.static("./develop/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

let PORT = process.env.PORT || 3000;

// const dbURI =  process.env.MONGODB_URI || "mongodb://localhost/workingOut";
// mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then((result) => app.listen(process.env.PORT || 3000))
//     .catch((err) => console.log("Connected to DB"))
    
   

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Kathicks387:<password>@cluster0.0fvf3.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


app.use(express.static('public'))



//ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./develop/public/index.html"));
  });
  
    app.get("/exercise", (req, res) => {
      res.sendFile(path.join(__dirname, "./develop/public/exercise.html"));
    });
    
    app.get("/stats", (req, res) => {
      res.sendFile(path.join(__dirname, "./develop/public/stats.html"));
      });

    //GET REQUESTS


app.get("/api/workouts", (req,res) => {
    db.Workout.find({}).sort({day:-1}).limit(1)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
  
  app.get("/api/workouts/range", (req,res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
  
  
  
  //PUT REQUESTS
  
  app.put("/api/workouts/:id", (req,res) => {
  
  let urlData = req.params;
  let data = req.body;
    db.Workout.updateOne( {_id: urlData.id }, {$push: {exercises:  [
      {
      "type" : data.type,
      "name" : data.name,
      "duration" : data.duration,
      "distance" : data.distance,
      "weight" : data.weight,
      "reps" : data.reps,
      "sets" : data.sets
      }
    ] 
  }}).then(dbUpdate => {
    res.json(dbUpdate);
  })
  .catch(err => {
    res.json(err);
  });
  
  });
  
  
  //POST REQUESTS
  
  app.post("/api/workouts", (req,res) => {
  
    let data = req.body;
  
    db.Workout.create({
      day: new Date().setDate(new Date().getDate())
  }).then(dbUpdate => {
        res.json(dbUpdate);
      })
      .catch(err => {
        res.json(err);
      });
  });

connectDB()

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });