// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongoDB erver');
    }
    console.log('Connection to mongoDB server successful');

    var db = client.db('ToDoApp');  
    
    // Find one and update $set operator
    db.collection('ToDos').findOneAndUpdate({
            _id: new ObjectID('5ead48d33a1560712e32f264')
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
        console.log(result);
    });
    
    // Find one and update $set and $inc operator
    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5ead5c3c3a1560712e32f5dc')},
        {$set: {name: 'MotuJain'}},
        {$inc: {age: 1}},
        {returnOriginal: false
        }).then((result) => {
        console.log(result);
    });

    client.close();
});