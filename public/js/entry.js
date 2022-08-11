let dropArea = document.getElementById("drop-area")
var socket = io();


function handleFiles(files) {
  files = [...files]
  console.log(files)
  files.forEach(uploadFile)
}



function uploadFile(file, i) {

    //socket.emit('updatebg', file);
   let reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend = function() {
       formData = {'url':"url(" +reader.result+")"}
       socket.emit('updatebg', formData)
   }
}

