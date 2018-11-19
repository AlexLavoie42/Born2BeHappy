/* This file contains the fitness plan object */
function FitnessPlan(isExercise, planName, type, description, video){
	this.isExercise = isExercise;
	this.planName = planName;
	this.type = type;
	this.description = description;
	this.video = video;
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