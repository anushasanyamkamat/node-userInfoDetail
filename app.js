const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

app.get('/', function(req, res){
    res.json({'title': 'Hello. World!'});
})

app.get('/user', function(req,res){
    res.json({'user_name': 'Anusha Kamat',
              'user_age': 28,
              'user_address': 'Berlin'})
})


app.get('/users', function(req,res){
    res.json([{'user_name': 'Anusha Kamat',
              'user_age': 28,
              'user_address': 'Berlin'},
              {
                'user_name': 'Sanyam',
                'user_age': 31,
                'user_address': 'Berlin'
              },
              {
                'user_name': 'Ved',
                'user_age': 10,
                'user_address': 'Bangalore'
              },
              {
                'user_name': 'John',
                'user_age': 40,
                'user_address': 'Mumbai'
              },
              {
                'user_name': 'Surabhi',
                'user_age': 27,
                'user_address': 'Goa'
            }])
})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
    
})
