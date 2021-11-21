img="";

function preload(){
   img=loadImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.ca%2Fpin%2F675328906625607617%2F&psig=AOvVaw3YjYA4ZEp_z43pztbrmiQW&ust=1637598998047000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDrgebxqfQCFQAAAAAdAAAAABAE');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#fa1400");
    text("Dog",45,75);
    noFill();
    stroke('#fa1400');
    rect(30,60,450,350);
}