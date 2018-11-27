var db = firebase.firestore();
var goal = document.getElementById("goal");
var addedGoals = document.getElementById("addedGoals");
var goals = [];
var goalDoc;
var goalSize;

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.replace("../sign-in.html");
  }
});


function addGoal(){
	goalDoc = db.collection("userGoals").doc(firebase.auth().currentUser.uid);
	goalDoc.get().then(function(doc) {
    if (doc.exists) {
        goalSize = doc.size;
    } else {
        console.log("Can't find user DB");
    }
 	}).catch(function(error) {
 	    console.log("Error getting document:", error);
 	});
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
	saveGoals();
}

function saveGoals(){
	var i;
	for(i = 0; i < goals.length; i++){
		var goalNum = i + goalSize;
		goalDoc.update({[goalNum]:goals[i]})
	}
}