const express = require('express');
const server = express();

server.get("/", function(req, res) {
    return res.send("Hi !! How's going")
});

server.listen(3333, function() {
    console.log("server is running")
});

