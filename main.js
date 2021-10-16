img="";
objects=[];
status="";

function preload()
{
song=loadSound("alarm.mp3");
}

function setup()
{
canvas=createCanvas(380,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects"
}

function modelLoaded()
{
console.log('modelLoaded');
status=true;
}

function gotResult(error,results)
{
if (error){console.log(error);
}
console.log(results)

objects=results;
}

function draw()
{    
image(video,0,0,380,300);
if (status != ""){
r=random(255);
g=random(255);
b=random(255);
objectDetector.detect(video,gotResult);
for (i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status: Objects Detected";

if (document.getElementById("YES! YES! YES! YES! YES! YES! YES! YES! YES! YES! YES!").innerHTML="Baby Found");
{document.getElementById("NO! NO! NO! NO! NO! NO! NO! NO! NO! NO! NO!").innerHTML="Baby Not Found"}
fill(r,g,b);
percent=floor(objects[i].confidence *100);
text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}