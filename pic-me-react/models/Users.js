var mongoose = require("mongoose");

var Schema = mongoose.Schema; 

var UsersSchema = new Schema({
    userName: {
        type: String, 
        require: true
    },
    email: {
        type: String, 
        require: true
    },
    password: {
        type: String, 
        require: true
    },
    description: {
        type: String, 
        require: true
    },

});

module.exports = UsersSchema; 