var goal = document.getElementById("goal");
var addedGoals = document.getElementById("addedGoals");
var goals = [];
function addGoal(){
	if(!goals.includes(goal.value)){
		goals.push(goal.value);
		displayGoal();
	}
}

function displayGoal(goalText) {
	var goalP = document.createElement("P");
	var goalText = document.createTextNode(goal.value);
	goal.value = "";
	goalP.appendChild(goalText);
	document.getElementById("addedGoals").appendChild(goalP);
}

function saveGoals(){
	
}