var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/AppToDo');

module.exports = {         // As variable name and property name are same  
    mongoose: mongoose    // for ES6 similar to module.exports = {mongoose};
};
