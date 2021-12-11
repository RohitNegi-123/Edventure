//backend
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { MONGOURI } = require("./config/keys.js");
const mongoose = require("mongoose");
mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', function () {
    console.log("connected");
})
mongoose.connection.on('error', function (err) {
    console.log("error", err);
})

require('./model/user')
app.use(express.json());
app.use(require('./routes/auth'));


if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", function (req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, function (req, res) {

    console.log("Server Started!!");
})

// mongodb+srv://Rohit:edventure123@@cluster0.tenvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority