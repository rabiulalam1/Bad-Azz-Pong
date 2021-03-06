const express = require('express')
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Listening when accessed by new user
io.on('connection', (socket) => {
  console.log('a user connected');
 
});

http.listen(port, () => {
  console.log("listening on " + port);
});