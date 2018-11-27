var db = firebase.firestore();
var goalDoc;
var dayDoc;
var goals;
var days;

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.replace("../sign-in.html");
  } else {
    loadGoals();
  }
});

function selectDay(day){
  days.push(day);
}

function saveDays(){

}

function loadGoals(){
  goalDoc = db.collection("userGoals").doc(firebase.auth().currentUser.uid);  
  dayDoc = db.collection("userDays").doc(firebase.auth().currentUser.uid).collection("goalNum");
	goalDoc.get().then(function(doc) {
    if (doc.exists) {
    goals = Object.values(doc.data());
    setGoals();
    } else {
        console.log("Can't find user DB");
    }
 	}).catch(function(error) {
 	    console.log("Error getting document:", error);
	});

}

function setGoals(){
  for(i = 0; i < goals.length; i++){
    
  }
}