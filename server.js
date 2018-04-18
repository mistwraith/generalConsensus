// Express Setup
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// Knex Setup
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];  
const knex = require('knex')(config);

// bcrypt setup
let bcrypt = require('bcrypt');
const saltRounds = 10;


app.post('/api/addPoll', (req,res) => {
	console.log("Successfully called the endpoint. Poll text: " + req.body.text);
	knex('polls').insert({text: req.body.text, total_responses: 0, 
		number_agree: 0, submitted_by: "testEntry", timestamp: new Date()})
	.then(ids => {console.log("Ids inserted: " + ids)})
	.catch(error => {
    console.log(error);
    res.status(500).json({ error });
  	});
});

app.get('/api/getPolls',(req,res) =>{
	knex('polls').orderBy('timestamp','desc')
	.select('id','text','total_responses','number_agree')
	.then(polls => {res.status(200).json({polls:polls});});	//how does this var work?
	//console.log(polls);
});

app.put('/api/addYes',(req,res)=>{
	console.log("Hit addYes endpoint. ID: " + req.body.id);
	knex('polls').where({id: req.body.id})
	.update({total_responses: req.body.total+1, number_agree: req.body.agree + 1})
	.then(ids => {console.log("Ids inserted: " + ids)})
	.catch(error => {
    console.log(error);
    res.status(500).json({ error });
  	});
});

app.put('/api/addNo',(req,res)=>{
	console.log("Hit addYes endpoint. ID: " + req.body.id);
	knex('polls').where({id: req.body.id})
	.update({total_responses: req.body.total+1})
	.then(ids => {console.log("Ids inserted: " + ids)})
	.catch(error => {
    console.log(error);
    res.status(500).json({ error });
  	});
});
/*
app.post('/api/users/:id/tweets', verifyToken, upload.single('image'), (req, res) => {
  let id = parseInt(req.params.id);
  if (id !== req.userID) {
    res.status(403).send();
    return;
  }
  // check for an image
  let path = ''
  if (req.file)
    path = req.file.path;
  knex('users').where('id',id).first().then(user => {
    return knex('tweets').insert({user_id: id, tweet:req.body.tweet, created: new Date(), image:path});
  }).then(ids => {
    return knex('tweets').where('id',ids[0]).first();
  }).then(tweet => {
    res.status(200).json({tweet:tweet});
    return;
  }).catch(error => {
    console.log(error);
    res.status(500).json({ error });
  });
});
*/
app.listen(3000, () => console.log('Server listening on port 3000!'));