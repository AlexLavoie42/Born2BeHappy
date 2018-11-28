var db = firebase.firestore();
var goal = document.getElementById("goal");
var addedGoals = document.getElementById("addedGoals");
var goals = [];
var goalDoc;
const goalLimit = 6;

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.replace("../sign-in.html");
  } else {
	getGoals();
  }
});



function getGoals(){
	goalDoc = db.collection("userGoals").doc(firebase.auth().currentUser.uid);
	goalDoc.get().then(function(doc) {
    if (doc.exists) {
		goals = Object.values(doc.data());
		for(i = 0; i < goals.length; i++) {
			displayGoal(i);
		}
    } else {
        goalDoc.set({1:null});
    }
 	}).catch(function(error) {
 	    console.log("Error getting document:", error);
	});
}

function addGoal(){
	 	if(!goals.includes(goal.value) && (goal.value.length === 0 || !goal.value.trim() || goal.value)){
			goals.push(goal.value);
			displayGoal((goals.length - 1));
			saveGoal((goals.length - 1));
		}
}

function displayGoal(goalNum) {
	if(goals.length <= 6){
		var goalP = document.createElement("P");
		var goalText = document.createTextNode(goals[goalNum]);
		goal.value = "";
		goalP.appendChild(goalText);
		document.getElementById("addedGoals").appendChild(goalP);
	}
	
}

function saveGoal(goalNum){
	goalDoc.update({[goalNum + 1]:goals[goalNum]});
}

function clearGoals(){
	for(i = 0; i < goals.length; i++){
		goalDoc.update({[i + 1]:firebase.firestore.FieldValue.delete()});
	}
	goals = [];
	var goalText = document.getElementById("addedGoals");
	while(goalText.firstChild){
		goalText.removeChild(goalText.firstChild);
	}
}