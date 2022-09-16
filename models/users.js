// First: get the Schema and the model from mongoose 
const {Schema, model} = new require('mongoose');

// Second: make data Schema 
const userSchema = new Schema({
    fName: String,
    favFood: String,
    age: Number
});
