/*This js file contains the fitness plan object */
function FitnessPlan(isExercise, type, name, rating, description){
	this.isExercise = isExercise;
	this.type = type;
	this.name = name;
	this.rating = rating;
	this.description = description;
}

FitnessPlan.getIsExercise = function(){
	return isExercise;
}

FitnessPlan.getType = function(){
	return type;
}

FitnessPlan.getName = function(){
	return name;
}

FitnessPlan.getRating = function(){
	return rating;
}

FitnessPlan.getDescription = function(){
	return description;
}

var planCount = 0;
var plan = new Array();

function savePlan(isExercise, type, name, rating, description){
	plan[planCount] = new FitnessPlan(isExercise, type, name, rating, description);
	planCount++;
}

savePlan(true, "upperBody", "Ryan's One-month Plan to Build Traps", "10/10", null);
savePlan(true, "upperBody", "How to Get a Bigger Chest", "9/10", null);

var inputPlan = document.getElementById("inputPlan");

function uploadPlan(planIndex){
	inputPlan.innerHTML += "<tr><td><h3>"
	+ plan[planIndex].name + "</h3><br />"
	+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
	+ "</td><td><h2>" + plan[planIndex].rating
	+ "</h2></td></tr>";
}
uploadPlan(0);

//updates the fitness section page; when the user switches section or type, this function updates it
function update(){
	for(let n = 0; n < planCount; n++){
		if(plan[n].isExercise){
			
		} else {
			
		}
	}
}