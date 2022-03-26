Status="";
input_text="";

function setup(){
    canvas=createCanvas(380,290)
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()
    video.size(380,290)
}

function start(){
    object_detector=ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects"
    input_text=document.getElementById("input_name").ariaValueMax;
}

function modelLoaded(){
    console.log("model_loaded")
    Status=true;
}

function draw(){
    image(video,0,0,480,380)
}