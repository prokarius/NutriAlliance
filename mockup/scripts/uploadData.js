var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var boundingRectTop = 200;
var boundingRectBot = 300;
var boundingRectLeft = 50;
var boundingRectRight = 250;

var displaymode = 0;
var progress = 0;

setInterval(drawClock, 300);

document.getElementById('myCanvas').addEventListener('click',function(evt){
    var rect = canvas.getBoundingClientRect();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;

    if (displaymode == 0){
        if (x > boundingRectLeft && x < boundingRectRight &&
            y > boundingRectTop && y < boundingRectBot){
            displaymode = 1;
        }
    }
},false);

function drawClock(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Asking for confirmation
    if (displaymode == 0){
        var boundingRectWidth = boundingRectRight - boundingRectLeft;
        var boundingRectHeight = boundingRectBot - boundingRectTop;
        drawRect(boundingRectLeft, boundingRectTop, boundingRectWidth, boundingRectHeight, "#92AD40");
        drawText("Tap to sync data", 75, 250);
    }

    // Syncing
    else if (displaymode == 1){
        if (progress > 100){
            displaymode = 2;
        }
        progress += (6 + 6*Math.random());
        if (progress < 50){
            drawText("Syncing in progress", 60, 230);
        }
        else {
            drawText("Updating...", 105, 230);
        }
        drawProgress(progress);
    }

    // Finished
    else { // displaymode == 2
        drawText("Syncing has finished.", 60, 150);
        drawText("Your app is updated.", 60, 200);
    }
}

function drawRect(left, top, width, height, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(left, top, width, height);
    ctx.stroke();
}

function drawProgress(progress){
    var rectWidth = 180;
    drawRect(50, 250, rectWidth+20, 20, "#DDDDDD");
    drawRect(50, 250, rectWidth*progress/100, 20, "#00DD00");
}

function drawText(text, posx, posy){
    ctx.font="20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(text, posx, posy);
}

