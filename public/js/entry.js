let dropArea = document.getElementById("drop-area")
var socket = io();


function handleFiles(files) {
  files = [...files]
  console.log(files)
  files.forEach(uploadFile)
}

function loadImage() {
  text = document.getElementById("imageLink").value
  img = "url('"+text+"')"
  updateGallery(img)
  socket.emit('updatebg', {'url':img})
  document.getElementById("imageLink").value = ""
}

function updateGallery(image)
{
  console.log("updating view")
  preview = document.getElementById("gallery")
  infotext = document.getElementById("infotext")
  infotext.innerText = "Background updated"
  console.log(image)
  preview.style.backgroundImage = image
  preview.style.backgroundColor ="red"
  console.log(preview)
}

function uploadFile(file, i) {

   let reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend = function() {
       img = "url(" +reader.result+")"
       formData = {'url':img}
       updateGallery(img)
       socket.emit('updatebg', formData)
   }
}

