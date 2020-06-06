var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./DB/mongoose');
var {todoSchema} = require('./Models/AppToDo');
var {usersSchema} = require('./Models/AppUsers');

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server Started on port 3000');
});

app.post('/apptodos', (req,res) => {
    var todo = new todoSchema({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});