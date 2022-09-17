const express = require("express");
const app = express();
const port = 3000;

// database files
const db = require("./db");
const User = require("./models/users");

// root page request
app.get("/", (req, res) => {
    res.json("<h1>Hello World</h1>");
});

// show users page
app.get('/get-users', (req, res) => {
    User.find({}, (err, data) => {
        if(err) {
            console.log('Error, Can not find users');
        } else {
            res.json(data);
        }
    })
})

// server start listening for client requests
app.listen(port, () => {
    console.log('SERVER IS WORKING ...');
});
