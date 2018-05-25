"use strict";

/***************
TEST VARIABLES
****************/
//string
const member1FirstName = "Pierrick";
let member1Name = "Juy";

console.log(memberFirstName1); //return Pierrick
console.log(memberFirstName1 + " " + memberName1); //return Pierrick Juy

member1Name = "Fioretti Juy";
console.log(memberFirstName1 + " " + memberName1); //return Pierrick Fioretti Juy

/*********
TEST ARRAY
**********/
let member1Array = [member1FirstName, member1Name];
console.log(member1Array); //return array ????
console.log(member1Array[0]); //return Pierrick
console.log(member1Array[1]); //return Fioretti Juy

for (a = 0; a < member1Array.length; a++) {
	console.log(member1Array[a]);
	//Pierrick
	//Fioretti Juy
}

//sort string
member1Array.sort();
//tri par ordre croissant
//return [Fioretti Juy,Pierrick]

//inverser l'ordre
member1Array.sort(function () {
	return 1; //inverse l'ordre
});
member1Array.sort(function (a, b) {
	return a - b; //inverse l'ordre
});
member1Array.sort(function (a, b) {
	return b - a; //inverse l'ordre
});
//return [Pierrick,Fioretti Juy]
//return [Fioretti Juy,Pierrick]
//return [Pierrick,Fioretti Juy]
//return [Fioretti Juy,Pierrick]

//sort numbers
numberArray = [0, 1, 2, 10, 20, 100, 999];
numberArray.sort();
//tri par ordre ASCII ou unicode croissant
//return [0,1,10,100,2,20,999];

//inverser l'ordre
member1Array.sort(function () {
	return 1; //inverse l'ordre
});
//return [0,1,10,100,2,20,999];
//return [999,20,2,100,10,1,0];
//return [0,1,10,100,2,20,999];
//return [999,20,2,100,10,1,0];

//ordre croissant
member1Array.sort(function (a, b) {
	return a - b; //ordre croissant
});
//return [0,1,2,10,20,100,999];

//ordre décroissant
member1Array.sort(function (a, b) {
	return b - a; //ordre décroissant
});
//return [999,100,20,10,2,1,0];