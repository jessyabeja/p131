img = "";

function preload(){
    img = loadImage('banana.webp');
}

function setup(){
    canvas = createCanvas(640, 350);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Banana", 235, 45);
    noFill();
    stroke("#FF0000");
    rect(230, 30, 270, 250);
}