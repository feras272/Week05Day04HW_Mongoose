// First: get the Schema and the model from mongoose 
const {Schema, model} = new require('mongoose');

// Second: make data Schema 
const userSchema = new Schema({
    fName: String,
    favFood: String,
    age: Number
});

// Third: make model of the Schema
const User = model('User', userSchema);

// Forth: export the model
module.exports = User