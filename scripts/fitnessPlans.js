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

//save the default plans
savePlan(true, "upperBody", "Ryan's One-month Plan to Build Traps", "10/10", null);
savePlan(true, "upperBody", "How to Get a Bigger Chest", "9/10", null);

var inputPlan = document.getElementById("inputPlan");
var planName;

function uploadPlan(planIndex){
	for(let u = 0; u < planCount; u++){
		if(plan[u].type == "upperBody" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			planName = plan[u].name;
			document.getElementById(plan[u].name).addEventListener('click', planClicked);
		} else if(plan[u].type == "lowerBody" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			planName = plan[u].name;
			document.getElementById(plan[u].name).addEventListener('click', planClicked);
		} else if(plan[u].type == "cardio" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			planName = plan[u].name;
			document.getElementById(plan[u].name).addEventListener('click', planClicked);
		} else if(plan[u].type == "weightLoss" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			planName = plan[u].name;
			document.getElementById(plan[u].name).addEventListener('click', planClicked);
		} else if(plan[u].type == "bulkUp" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			planName = plan[u].name;
			document.getElementById(plan[u].name).addEventListener('click', planClicked);
		} else if(plan[u].type == "preWorkout" && plan[u].type == planIndex){
			inputPlan.innerHTML += "<tr id=\"" + plan[u].name + "\"><td><h3>"
			+ plan[u].name + "</h3><br />"
			+ "<img src='../images/play.png' alt='Play Button' width='200px' />"
			+ "</td><td><h2>" + plan[u].rating
			+ "</h2></td></tr>";
			planName = plan[u].name;
			document.getElementById(plan[u].name).addEventListener('click', planClicked);
		}
	}
	console.log(plan);
}
uploadPlan("upperBody");

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

//This is to get rid of a glitch
document.getElementById("Ryan's One-month Plan to Build Traps").addEventListener('click', function(){
	planName = "Ryan's One-month Plan to Build Traps";
	planClicked();
});

var fb = firebase.firestore();
function planClicked(){
	var planClicked = {
		name: planName
	};
	database.collection('fitness').doc('planViewed').set(planClicked).then(function() {
		document.location.href = "viewPlan.html";
	});
}