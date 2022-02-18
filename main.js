img="";
status="";

function preload()
{
    img=loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting object";
}

function modelLoaded()
{
    console.log("model loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("cat",350,75);
    noFill();
    stroke("#FF0000");
    rect(300, 100, 270, 320);
}

function gotResult(error,results)
{
if(error){
console.log(error);
}


else{
console.log(results);
}
}