// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const questions = require('./controllers/questions_controller')

// ELEPHANT SQL
// var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

// var conString = "postgres://juqhmdzx:aVg0D3uubhaQ-ViT38bLxAamyt7PizZ9@heffalump.db.elephantsql.com/juqhmdzx" //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Trivia API'
    })
})

// CONTROLLERS  
const questionsController = require('./controllers/questions_controller')
app.use('/questions', questionsController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})