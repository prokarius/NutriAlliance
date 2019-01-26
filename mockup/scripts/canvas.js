var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var datachoice = 0;

var rect = canvas.getBoundingClientRect();
var XSCALE = rect.right - rect.left;
var YSCALE = (rect.bottom - rect.top) * 0.5;

var data = [[[0.13, 0.78], [0.24, 0.76], [0.33, 0.74], [0.41, 0.80], [0.56, 0.92], [0.61, 0.90], [0.69, 0.86], [0.78, 0.82], [0.86, 0.78]],
    [[0.12, 0.60], [0.21, 0.68], [0.33, 0.64], [0.44, 0.72], [0.58, 0.82], [0.64, 0.82], [0.78, 0.86], [0.86, 0.80]],
    [[0.12, 0.66], [0.21, 0.72], [0.33, 0.74], [0.44, 0.72], [0.58, 0.72], [0.64, 0.76], [0.78, 0.70], [0.86, 0.66]]
];

drawClock();

function drawClock() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGraph(data[datachoice]);
}

function drawArrow(fromx, fromy, tox, toy){
    //variables to be used when creating the arrow
    var headlen = 6;

    var angle = Math.atan2(toy-fromy,tox-fromx);

    //starting path of the arrow from the start square to the end square and drawing the stroke
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();

    //starting a new path from the head of the arrow to one of the sides of the point
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

    //path from the side point of the arrow, to the other side point
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),toy-headlen*Math.sin(angle+Math.PI/7));

    //path from the side point back to the tip of the arrow, and then again to the opposite side point
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),toy-headlen*Math.sin(angle-Math.PI/7));

    //draws the paths created above
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#000";
    ctx.fill();
}

function dot2dot(inputdat){
    ctx.beginPath();
    ctx.moveTo(inputdat[0][0] * XSCALE, inputdat[0][1] * YSCALE);
    ctx.lineTo(inputdat[1][0] * XSCALE, inputdat[1][1] * YSCALE);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.stroke();
}

function drawGraph(inputdata) {
    drawText("Weight across Time", 90, 32);
    drawArrow(20, 160, 20, 20);
    drawArrow(10, 150, 280, 150);
    var out = []
    for (i = 0; i < inputdata.length - 1; i++){
        out[i] = [inputdata[i], inputdata[i+1]];
    }
    out.map(dot2dot);
}

function drawText(text, posx, posy){
    ctx.font="15px Arial";
    ctx.fillText(text, posx, posy);
}

var comments = [
    "Was not able to eat food on 3rd Sept 2018. Adviced to eat more food",
    "Advised to eat more nutritious food and rest, losing weight heavily.",
    "Generally healthy."
]

function changeGraph(select){
    datachoice = select.value;
    console.log(datachoice);
    drawClock();
    var commentField = document.getElementById("comment");
    commentField.innerHTML=comments[datachoice];
}
