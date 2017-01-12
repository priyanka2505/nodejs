var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var User = require('./users.models.js');

// Define the home page route
router.get('/', function(req, res) {  
  res.sendFile(path.join(__dirname +'/login.html'));

});


router.get('/home', function(req, res) {  
  res.sendFile(path.join(__dirname +'/home.html'));  
});


router.get('/login', function(req, res) {  
  res.sendFile(path.join(__dirname +'/login.html'));
});

router.get('/signup', function(req, res) {  
  res.sendFile(path.join(__dirname +'/signup.html'));

});


// Define the login route
router.post('/login',urlencodedParser, function(req, res) 
{
     if (!req.body)
     return res.sendStatus(400);  
    
        console.log("req.body -> ",req.body.data)
        res.setHeader('Content-Type', 'application/json') 

        User.find(
          {
            'username': req.body.data
          } ,function(err, docs)
          {
            console.log(docs.length)
            if (docs.length==0) {             
               res.end('{"userexist": "false"}');
            }
            else {             
               res.send('{"userexist": "true","redirect":"/home"}');
            }
          }); 

});





router.post('/signup',urlencodedParser, function(req, res) 
{
     if (!req.body)
     return res.sendStatus(400);  
    
    res.sendFile(path.join(__dirname +'/home.html'));
    var user = new User
      ({
       username:req.body.InputUsername,
       email:req.body.InputEmail,
       password:req.body.InputPassword
      }); 
      user.save();

      console.log(" - SAVED TO DB ");  
  
 });






module.exports = router;


