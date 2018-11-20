/* This file contains the misc. data for the fitness section such as event handlers */
var type1 = document.getElementById("type1");
var type2 = document.getElementById("type2");
var type3 = document.getElementById("type3");

var exercise = document.getElementById("exercise");
var meal = document.getElementById("meal");

var sectionSelected = 0;//exercise or meal
var typeSelected = 0;//type1, type2, or type3

exercise.style.backgroundColor = "yellow";

function switchSection(i){
	if(i == 0){
		exercise.style.backgroundColor = "yellow";
		meal.style.backgroundColor = "transparent";
		
		type1.innerHTML = "Upper-body";
		type2.innerHTML = "Lower-body";
		type3.innerHTML = "Cardio";
		
		sectionSelected = 0;
	} else {
		exercise.style.backgroundColor = "transparent";
		meal.style.backgroundColor = "yellow";
		
		type1.innerHTML = "Weight-loss";
		type2.innerHTML = "Bulk-up";
		type3.innerHTML = "Pre-workout";
		
		sectionSelected = 1;
	}
	
	update();
	console.log(sectionSelected);
}