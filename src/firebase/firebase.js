import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCcwKyKHqjr9IbEOI0FVlnZJLkPXq9Gfxc",
    authDomain: "expensify-5d77f.firebaseapp.com",
    databaseURL: "https://expensify-5d77f.firebaseio.com",
    projectId: "expensify-5d77f",
    storageBucket: "expensify-5d77f.appspot.com",
    messagingSenderId: "525617577528",
    appId: "1:525617577528:web:71385e757964a64a92f0cd",
    measurementId: "G-LWYQ0ZCH9P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthprovider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthprovider, database as default};











// database.ref()
// .once('value')
// .then((snapshot)=>{
// const val = snapshot.val();
// console.log(val);
// }).catch((e)=>{
// console.log("error",e.message);
// });

//Complete setup for subscription and unsunscription of values
// const onValueChange = database.ref()
//     .on("value", (snapshot) => {
//         console.log(snapshot.val());
//     });
// setTimeout(() => {
//     database.ref("age").set("29");
// }, 3500);
//  setTimeout(() => {
//      database.ref().off("value",onValueChange);
//  }, 7000);
// setTimeout(() => {
//     database.ref("age").set("30");
// }, 10500);

// database.ref().set({
//     name: "Pooja",
//     age: 26,
//     isSingle: true,
//     stressLevel:6,
//     company:"Google",
//     location: {
//         city: "Gurugram",
//         country: "India"
//     }
// }).then((data) => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log("Failed with error", error.message);
// });

// database.ref("attributes").set({
//     height: '149cm',
//     weight: '65kg'
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log("Failed with error", error.message);
// });
// var adaRef = database.ref('isSingle');
// adaRef.remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });
// console.log("I made a request to change the data");
// database.ref().update({
//     name:"Pankaj",
//     job:"Software Developer",
//     age:null
// });
// database.ref().update({
//     stressLevel:9,
//     "job/title":"Software developer",
//     "job/city":"Seattle"
// });