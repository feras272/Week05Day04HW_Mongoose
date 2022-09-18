const express = require("express");
const app = express();
const port = 3000;

// database files
const db = require("./db");
const User = require("./models/users");

app.use(express.json());

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

// add user to 
app.post("/post-users", (req, res) => {
    User.create(req.body, function (err, newUser) {
      if (err) {
        console.log("ERROR => " + err);
        res.status(400).json("User Validation Failed");
      } else {
        res.json("Success create new user." + " Name : " +
        req.body.fName + ", Favorite Food : " + 
        req.body.favFood + ", And the Age : " + 
        req.body.age + " year old");
      }
    });
  });  

app.put('/put-users/fName/:oldName', (req, res) => {
    User.updateOne(
        { fName: req.params.oldName },
        { fName: req.body.newName },
        (err, updatedObj) => {
          if (err) {
            console.log("ERROR => " + err);
            res.status(500).json("There is a Problem with the Database");
          } else {
            console.log(updatedObj);
            if (updatedObj.matchedCount === 0) {
              console.log(updatedObj);
              res.status(404).json("Cannot Update User [" + req.params.oldName + "] Not Found");
            } else {
              console.log(
                "User Updated from " +
                  req.params.oldName +
                  " To User name " +
                  req.body.newName
              );
              res
                .status(200)
                .json(
                  "Success Update " + req.params.oldName + " To " + req.body.newName
                );
            }
          }
        }
      );
});

// server start listening for client requests
app.listen(port, () => {
    console.log('SERVER IS WORKING ...');
});
