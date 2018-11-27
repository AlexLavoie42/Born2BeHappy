var db = firebase.firestore();
var goals = [];

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.replace("../sign-in.html");
  }
});
