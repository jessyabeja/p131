img = "";

function preload(){
    img = loadImage('tvac.webp');
}

function setup(){
    canvas = createCanvas(640, 350);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("green");
    text("TV", 210, 25);
    noFill();
    stroke("green");
    rect(200, 10, 250, 300);
}