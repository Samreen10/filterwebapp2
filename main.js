function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is loaded.');
}

function draw()
{
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);
    }
}