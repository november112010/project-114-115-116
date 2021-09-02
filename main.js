headX=0;
headY=0;
function preload()
{
  pusheen = loadImage('pusheen.png');
}

function setup()
{
  canvas = createCanvas(600,600);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(600,600);
  video.hide(); 
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);  
}


function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if (results.length > 0) 
  {
    console.log(results);
    headX = results[0].pose.nose.x;
    headY = results[0].pose.nose.y;
    console.log("head x = " + results[0].pose.nose.x);
    console.log("head y = " + results[0].pose.nose.y);  
  }
}

function draw()
{
  image(video,0,0,600,600);
  image(pusheen, headX-80, headY-350, 160, 160);
}

function take_snapshot()
{
  save('Alisha.png');  
}