function preload(){

}

function setup(){
    createCanvas(500,500)
 video = createCapture(VIDEO,)
video.hide()
 
tint_color = "";
}

function draw(){
    image(video,0,0,500,500)       
    tint(tint_color)
}

function snap(){
    save("You.png")
}

function changeTint(){
    tint_color = document.getElementById("tint").value
} 