const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const UsersSchema = new Schema({
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

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users; 