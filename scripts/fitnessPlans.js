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
};

FitnessPlan.getType = function(){
	return type;
};

FitnessPlan.getName = function(){
	return name;
};

FitnessPlan.getRating = function(){
	return rating;
};

FitnessPlan.getDescription = function(){
	return description;
};

var planCount = 0;
var plan = new Array();

function savePlan(isExercise, type, name, rating, description){
	plan[planCount++] = new FitnessPlan(isExercise, type, name, rating, description);
}

var inputPlan = document.getElementById("inputPlan");
var planName;

function uploadPlan(planIndex){
	for(let u = 0; u < planCount; u++){
		if(plan[u].type == "upperBody" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td style='border: solid black 2px' id=\"" + plan[u].name + "\"><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td style='border: solid black 2px'><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			document.getElementById("inputPlan").addEventListener('click', eventListener);
		} else if(plan[u].type == "lowerBody" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td style='border: solid black 2px' id=\"" + plan[u].name + "\"><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td style='border: solid black 2px'><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			document.getElementById(plan[u].name).addEventListener('click', eventListener);
		} else if(plan[u].type == "cardio" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td style='border: solid black 2px' id=\"" + plan[u].name + "\"><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td style='border: solid black 2px'><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			document.getElementById(plan[u].name).addEventListener('click', eventListener);
		} else if(plan[u].type == "weightLoss" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td style='border: solid black 2px' id=\"" + plan[u].name + "\"><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td style='border: solid black 2px'><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			document.getElementById(plan[u].name).addEventListener('click', eventListener);
		} else if(plan[u].type == "bulkUp" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td style='border: solid black 2px' id=\"" + plan[u].name + "\"><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td style='border: solid black 2px'><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			document.getElementById(plan[u].name).addEventListener('click', eventListener);
		} else if(plan[u].type == "preWorkout" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td style='border: solid black 2px' id=\"" + plan[u].name + "\"><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td style='border: solid black 2px'><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			document.getElementById(plan[u].name).addEventListener('click', eventListener);
		}
	}
	console.log(plan);
}

function clearPlan(){
	inputPlan.innerHTML = "";
}

//updates the fitness section page; when the user switches section or type, this function updates it
function update(){
	if(sectionSelected == 0){
		if(typeSelected == 0){
			clearPlan();
			uploadPlan("upperBody");
		} else if(typeSelected == 1){
			clearPlan();
			uploadPlan("lowerBody");
		} else {
			clearPlan();
			uploadPlan("cardio");
		}
	} else {
		if(typeSelected == 0){
			clearPlan();
			uploadPlan("weightLoss");
		} else if(typeSelected == 1){
			clearPlan();
			uploadPlan("bulkUp");
		} else {
			clearPlan();
			uploadPlan("preWorkout");
		}
	}
}

var fb = firebase.firestore();
function eventListener(event){
	var planClicked = {
		name: event.target.parentNode.id
	};
	database.collection('fitness').doc('planViewed').set(planClicked).then(function() {
		document.location.href = "viewPlan.html";
	});
}