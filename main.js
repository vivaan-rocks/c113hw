
function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,230,150,220,200);

    fill(255,0,0)
    stroke(255,0,0)
    circle(50,50,80)
    circle(590,50,80)
    circle(50,430,80)
    circle(590,430,80)

    fill(0,120,0)
    stroke(0,128,0)
    rect(90,420,460,20)
    rect(90,50,460,20)
    rect(600,90,20,300)
    rect(30,90,20,300)
}