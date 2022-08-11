const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  maxHttpBufferSize: 1e8, pingTimeout: 60000
});

const path = require('path');
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/update', (req, res) => {
  res.render('update',
  {
  });
});
app.post('/update',(req, res) => {
  current_image = req.body;
  console.log(req.body);
  
})

io.on('connection', (socket) => {
  console.log("new user")
  socket.on('updatebg', msg => {
    console.log("sending message");
    io.sockets.emit('updatebg', msg);
  });
});


server.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, "public")));