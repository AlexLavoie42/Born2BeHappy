/* This file contains the fitness plan object */
function FitnessPlan(isExercise, planName, type, description, rating){
	this.isExercise = isExercise;
	this.planName = planName;
	this.type = type;
	this.description = description;
	this.rating = rating;
}

FitnessPlan.getIsExercise = function(){
	return isExercise;
};

FitnessPlan.getPlanName = function(){
	return planName;
};

FitnessPlan.getType = function(){
	return type;
};

FitnessPlan.getDescription = function(){
	return description;
};

FitnessPlan.getRating = function(){
	return rating;
};

//Add every plan that is stored/added to the fitness page
var planCount = 0;
var plan = new Array();

function addPlan(isExercise, planName, type, description, rating){
	plan[planCount] = new FitnessPlan(isExercise, planName, type, description, rating);
	planCount++;
}

FitnessPlan.getPlanCount = function(){
	return planCount;
};

//add default plans
addPlan(true, "Ryan's One-Month Plan to Strengthen Your Chest", "upperBody", null, null);
addPlan(true, "How to Build Traps", "weightLoss", null, null);

function uploadPlans(){
	
}

//Update the sections with the user's click
var isExercise = true;
var planType = 0;

var exercise = document.getElementById("exercise");
var meal = document.getElementById("meal");

var type1 = document.getElementById("type1");
var type2 = document.getElementById("type2");
var type3 = document.getElementById("type3");

exercise.style.backgroundColor = "yellow";

function switchSection(i){
	//if the user selects exercise
	if(i == 0){
		exercise.style.backgroundColor = "yellow";
		meal.style.backgroundColor = "transparent";
		
		type1.innerHTML = "Upper-body";
		type2.innerHTML = "Lower-body";
		type3.innerHTML = "Cardio";
		
		isExercise = true;
	} else {//if the user selects meal
		exercise.style.backgroundColor = "transparent";
		meal.style.backgroundColor = "yellow";
		
		type1.innerHTML = "Weight-loss";
		type2.innerHTML = "Bulk-up";
		type3.innerHTML = "Pre-workout";
		
		isExercise = false;
	}
}