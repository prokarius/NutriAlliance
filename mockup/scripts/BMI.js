function onSubmit(){
    var counter = 0;

    var results = document.getElementById("results");
    results.innerHTML = "Results";

    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
    var bmi = weight / (height * height);
    var bmiDisplay = document.getElementById("bmiResults");
    if (bmi < 16){
        bmiDisplay.style.color = "red";
    }
    else if (bmi < 18){
        bmiDisplay.style.color = "olive";
    }
    bmiDisplay.innerHTML = "BMI: " + bmi.toFixed(1);

    var bp1 = document.getElementById("bp1").value;
    var bp2 = document.getElementById("bp2").value;
    var bpDisplay = document.getElementById("bpResults");
    var bpResults = "";
    if (bp1 < 120 && bp2 < 80){
        bpResults = "Normal.";
        bpDisplay.style.color = "green";
    }
    else if (bp1 < 140 && bp2 < 90){
        bpResults = "At risk.";
        bpDisplay.style.color = "olive";
        counter += 1;
    }
    else {
        bpResults = "Dangerous!"
        bpDisplay.style.color = "red";
        counter += 3;
    }
    bpDisplay.innerHTML = "Blood Pressure " + bpResults;

    var nutrition = document.getElementById("nutrition");
    if (bmi < 16){
        nutrition.innerHTML = "Severely <a href='malnourish.html'>Malnourished</a>.";
        nutrition.style.color = "red";
        counter += 3
    }
    else if (bmi < 18){
        nutrition.innerHTML = "<a href='malnourish.html'>Malnourished</a>";
        nutrition.style.color = "olive";
        counter += 1;
    }
    else {
        nutrition.innerHTML = "Fully Nourished."
        nutrition.style.color = "green";
    }

    var summary = document.getElementById("summary");
    if (counter == 0){
        summary.innerHTML = "Healthy";
        summary.style.color = "green";
    }
    else if (counter < 3){
        summary.innerHTML = "Needs Attention";
        summary.style.color = "olive";
    }
    else {
        summary.innerHTML = "Need Urgent Attention!";
        summary.style.color = "red";
    }
}

function onSubmit2(){
    var counter = 0;

    var results = document.getElementById("results");
    results.innerHTML = "Results";

    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
    var bmi = weight / (height * height);
    var bmiDisplay = document.getElementById("bmiResults");
    if (bmi < 16){
        bmiDisplay.style.color = "red";
    }
    else if (bmi < 18){
        bmiDisplay.style.color = "olive";
    }
    bmiDisplay.innerHTML = "BMI: " + bmi.toFixed(1);

    var nutrition = document.getElementById("nutrition");
    if (bmi < 16){
        nutrition.innerHTML = "Severely <a href='malnourish.html'>Malnourished</a>.";
        nutrition.style.color = "red";
        counter += 2
    }
    else if (bmi < 18){
        nutrition.innerHTML = "<a href='malnourish.html'>Malnourished</a>";
        nutrition.style.color = "olive";
        counter += 1;
    }
    else {
        nutrition.innerHTML = "Fully Nourished."
        nutrition.style.color = "green";
    }

    var summary = document.getElementById("summary");
    var recommendation = document.getElementById("recommendation");
    var reclink = document.getElementById("reclink");
    if (counter == 0){
        summary.innerHTML = "Healthy";
        summary.style.color = "green";
    }
    else if (counter < 1){
        recommendation.innerHTML = "You are underweight!";
        recommendation.style.color = "olive";
        reclink.innerHTML = "Consult our nutrition planner for more information.";
    }
    else {
        recommendation.innerHTML = "You are severly underweight!"
        recommendation.style.color = "red";
        reclink.innerHTML = "Consult our nutrition planner for more information.";
    }
}

