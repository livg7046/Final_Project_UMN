const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
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
    photo : {
        type: String,
        required: false
    }

});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;