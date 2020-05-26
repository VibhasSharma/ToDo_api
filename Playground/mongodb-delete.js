// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongoDB erver');
    }
    console.log('Connection to mongoDB server successful');

    var db = client.db('ToDoApp');  
    
    // Delete many
    db.collection('Users').deleteMany({text: "Play GTA V"}).then((result) => {
        console.log(result);
    });
    // Delete One
    db.collection('ToDos').deleteOne({text: 'Study'}).then((resuly => {
        console.log(result);
    }));
    // Find one and delete
    db.collection('ToDos').findOneAndDelete({text: 'Draw'}).then((result => {
        console.log(result);
    }));

    client.close();
});