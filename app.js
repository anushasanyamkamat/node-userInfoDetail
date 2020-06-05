const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.json({'title': 'Hello. World!'});
})

app.get('/user', function(req,res){
    res.json({'name': 'Anusha Kamat',
              'age': 28,
              'address': 'Berlin'})
})






app.listen(3000, function(){
    console.log("Server is running on port 3000");
    
})
