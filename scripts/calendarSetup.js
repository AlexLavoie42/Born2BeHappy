var db = firebase.firestore();
var goalDoc;
var goals;
var days = [];

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.replace("../sign-in.html");
  }
});

function selectDay(day){
  days.push(day);
}

function saveDays(){

}

loadGoals();

function loadGoals(){
  goalDoc = db.collection("userGoals").doc(firebase.auth().currentUser.uid);
  goalDoc.get().then(doc => {
    goals = doc.data();
  });
}