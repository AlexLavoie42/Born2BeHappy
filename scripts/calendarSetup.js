var db = firebase.firestore();
var goalDoc;
var dayDoc;
var goals = [];
var goalTexts = [];
var days = [];
var currentGoal;

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.replace("../sign-in.html");
  } else {
    loadGoals();
  }
});

function selectDay(day, bttn){
  if(currentGoal !== undefined){
    var dayIncludes = false;
    days.forEach(dayObj => {
      if(dayObj.day == day){
        dayIncludes = true;
        bttn.style.color = "black";
        days.splice(days.indexOf(dayObj), 1)
      } 
    });
    if(!dayIncludes){
      days.push({day, bttn});
      bttn.style.color = "red";
    }
  }
}

function saveDays(){
  currentDayDoc = dayDoc.doc(currentGoal.toString());
  currentDayDoc.set({null : null});
  days.forEach(function(d, i){
    currentDayDoc.update({[d.day] : true});
  })
}

function updateDays(){
  var dayButtns = document.getElementsByTagName("button");
  for(i = 0; i < dayButtns.length; i++){
    dayButtns[i].style.color = "black";
  }
  days.forEach(function(item){
    dayButtns[item.day - 1].style.color = "red";
  });
}

function loadGoals(){
  goalDoc = db.collection("userGoals").doc(firebase.auth().currentUser.uid);  
  dayDoc = db.collection("userDays").doc(firebase.auth().currentUser.uid).collection("goalNum");
	goalDoc.get().then(function(doc) {
    if (doc.exists) {
      Object.values(doc.data()).forEach(function(i, index){
        goals[index] = {goal : i, days : []};
      });
    setGoals();
    } else {
        console.log("Can't find user DB");
    }
 	}).catch(function(error) {
 	    console.log("Error getting goals:", error);
	});

}

function setGoals(){
  for(i = 0; i < goals.length; i++){
    var goalRow = document.createElement("TR");
    var goalD = document.createElement("TD");
    var goalText = document.createTextNode(goals[i].goal);
    
    goalD.appendChild(goalText);
    goalRow.appendChild(goalD);
    document.getElementById("goals").appendChild(goalRow);

    goalTexts.push(goalD);
    goalTexts.forEach(function x(item, index) {
      item.addEventListener("click", function(){
        if(currentGoal !== undefined){
          goals[currentGoal].days = days;
          saveDays();
        }
        currentGoal = index;
        goalTexts.forEach(i => {
          i.style.backgroundColor = "white";
        });
        item.style.backgroundColor = "yellow";

        if(goals[currentGoal].days !== undefined){
          days = goals[currentGoal].days;
        } else
        days = [];

        updateDays();
      });
    });
  }
}

function goToCalendar(){
  window.location.replace("./Calendar.html");
}