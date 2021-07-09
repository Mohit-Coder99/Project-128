dynamite_song = "";
ignite_song = "";

leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function preload(){
     dynamite_song = loadSound("dynamite.mp3");
     ignite_song = loadSound("ignite.mp3");
}

function setup(){
     canvas = createCanvas(600, 430);
     canvas.center();

     video = createCapture(VIDEO);
     video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses)
}

function gotPoses(){
     if(results.length > 0){
          console.log(results);
          leftWristX = results[0].pose.leftWrist.x;
          leftWristY = results[0].pose.leftWrist.y;
          console.log("leftWristX = " + leftWristX + " leftWidthY = " + leftWristY);

          rightWristX = results[0].pose.rightWrist.x;
          rightWristY = results[0].pose.rightWrist.y;
          console.log("rigtWristX = " + rightWristX + " rightWidthY = " + rightWristY);
     }
}

function modelLoaded(){
     console.log("Posenet is Intialized");
}

function draw(){
     image(video, 0, 0, 600, 430);
}