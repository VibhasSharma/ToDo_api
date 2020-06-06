var mongoose = require('mongoose');
var usersSchema = mongoose.model('AppUsers', {
    email: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = {usersSchema};