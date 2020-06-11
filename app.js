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
            }])
})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
    
})
