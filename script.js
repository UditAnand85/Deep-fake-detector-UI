let photo = document.getElementById("ch1")
let audio = document.getElementById("ch2")
let textdiv = document.getElementById("textdiv")
let link = document.getElementById("link")
var img = document.createElement("img")
img.src= "folder/mic1.png"
img.class="dimage"



var fulldiv = document.createElement("div")
fulldiv.id ="link"
var button = document.createElement("button")
var divtext = document.createElement("div")
divtext.innerHTML = "Start Recording"
button.id = "startre"


var divimage = document.createElement("div")
divimage.id = "imageha"

var box = document.getElementById("box")// box
var divmain = document.createElement("div")
divmain.id ="drag1"
var svgimg = document.createElement("img")
svgimg.src = "folder/mic.png"
img.class="dimage1"
var textdiv1 = document.createElement("div")
textdiv1.innerHTML = "Choose a mp3 file or Drag it here"
textdiv1.id = "textdiv1"
var button1 = document.createElement("button")
button1.id="Upload"
button1.innerHTML = "Upload Audio"

// ---------------------------------------------------------------------------------------------



var drag = document.createElement("div")
drag.id = "drag"
var divimg = document.createElement("div")
var image5 = document.createElement("img")
image5.src = "folder/image-processing.png"
image5.id = "dimage"
var textdiv2 = document.createElement("div")
textdiv2.innerText = "Drag an Image here"
textdiv2.style="color:rgb(60 64 67);"




var input = document.createElement("input")
input.id = "input"
input.type = "text"
input.placeholder = "Paste Image Link here"
var button2 = document.createElement("button")
button2.innerHTML = "Enter"




photo.addEventListener("click",()=>{
    photo.style.border = "2px solid black";
    photo.style.backgroundColor = "white"
    photo.style.color = "black"
    audio.style.border = "2px solid white";
    audio.style.backgroundColor = "#181818"
    audio.style.color = "white"
    textdiv.innerText = "Add Image you want to verify"
    box.innerHTML = ""
    box.append(drag)
    drag.append(divimg)
    drag.append(textdiv2)
    divimg.append(image5)
    link.innerHTML= ""
    link.append(input)
    link.append(button2)




})

audio.addEventListener("click",()=>{
    audio.style.border = "2px solid black";
    audio.style.backgroundColor = "white"
    audio.style.color = "black"
    photo.style.border = "2px solid white";
    photo.style.backgroundColor = "#181818"
    photo.style.color = "white"
    textdiv.innerText = "Add Audio you want to verify"
    link.innerHTML=""
    link.append(button)
    button.append(fulldiv)
    fulldiv.append(img)
    fulldiv.append(divtext)
    box.innerHTML=""
    box.append(divmain)
    divmain.append(divimage)
    divmain.append(textdiv1)
    divmain.append(button1)
    divimage.append(svgimg)


})

const inputfile = document.getElementById("input-file")
const dragarea = document.getElementById("dragarea")
inputfile.addEventListener("change",uploadimage())
function uploadimage(){
    let imglink = URL.createObjectURL(inputfile.files[0]);
    imageview.style.backgroundImage = `url(${imglink})`
    drag.innerHTML = ""
}



