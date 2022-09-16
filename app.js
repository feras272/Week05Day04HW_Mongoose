const express = require('express');
const app = express();
const port = 3000;

const db = require("./db");
const User = require("./models/users");