
  var socket = io();

  socket.on('updatebg', function(data) {
    console.log(data);
    document.body.style.backgroundImage = data.url;
  })