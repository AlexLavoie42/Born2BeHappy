/* This file contains the fitness plan object */
function FitnessPlan(isExercise, planName, type, description, video, rating){
	this.isExercise = isExercise;
	this.planName = planName;
	this.type = type;
	this.description = description;
	this.video = video;
	this.rating = rating;
}

FitnessPlan.getIsExercise = function(){
	return isExercise;
}

FitnessPlan.getPlanName = function(){
	return planName;
}

FitnessPlan.getType = function(){
	return type;
}

FitnessPlan.getDescription = function(){
	return description;
}

FitnessPlan.getVideo = function(){
	return video;
}

FitnessPlan.getRating = function(){
	return rating;
}

//Add every plan that is stored/added to the fitness page
var planCount = 0;
var plan = new Array();

function addPlan(isExercise, planName, type, description, video){
	plan[planCount] = new FitnessPlan(isExercise, planName, type, description, video);
	planCount++;
}

FitnessPlan.getPlanCount = function(){
	return planCount;
}

//add default plans
addPlan(true, "Ryan's One-Month Plan to Strengthen Your Chest", "upperBody", null, null);
addPlan(true, "How to Build Traps", "weightLoss", null, null);