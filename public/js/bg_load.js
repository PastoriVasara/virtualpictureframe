document.addEventListener("DOMContentLoaded", function(){
  document.body.style.backgroundImage = defaultimage;
});


  var socket = io();

  socket.on('updatebg', function(data) {
    console.log(data);
    document.body.style.backgroundImage = data.url;
  })