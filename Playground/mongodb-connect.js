const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongoDB erver');
    }
    console.log('Connection to mongoDB server successful');

    var db = client.db('ToDoApp');
    // db.collection('ToDos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert the records', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Vibhas Sharma',
        age: 22,
        location: 'Pune'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert the records', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});