// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        return console.log('Unable to connect to mongoDB erver');
    }
    console.log('Connection to mongoDB server successful');

    var db = client.db('ToDoApp');  
    // Priniting all the documents
    // db.collection('ToDos').find({
    //    _id: new ObjectID('5ead48ab3a1560712e32f259')
    // }).toArray().then((docs) => {
    //     console.log('To Do Items:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch data', err);
    // });  

    // // Printing the count of ToDos 
    // db.collection('ToDos').find().count().then((count) => {
    //     console.log(`Total To-Do's count is: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch the count of documents');
    // });

    // Printing based on name
    db.collection('Users').find({name: "Vibhas Sharma"}).toArray().then((docs) => {
        console.log('Documents that contain name: Vibhas: ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find ducuments');
    });

    client.close();
});