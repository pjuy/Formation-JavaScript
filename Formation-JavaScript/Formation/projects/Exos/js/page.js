"use strict";

/*************
Construct team
**************/
const TeamMember = function (firstName, lastName, photo, birthDate, team, hobbies) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.photo = photo;
	this.birthDate = birthDate;
	this.hobbies = hobbies;
	this.team = team;
};

let member1 = new TeamMember("Pierrick", "Juy", "images/member1.png", "21/06/1986", "Product Owner", ["Fantasy", "RPG", "FF", "Magic"]);
let member2 = new TeamMember("Iron", "Man", "images/member1.png", "01/01/2001", "Super Hero", ["Technology", "Money", "Weapons"]);
let member3 = new TeamMember("Super", "Man", "images/member1.png", "02/02/2002", "Super Hero", ["Sun", "Planes", "Birds"]);
let member4 = new TeamMember("Aqua", "Man", "images/member1.png", "03/03/2003", "Super Hero", ["Fish", "Trident", "Orange"]);

let team = [member1, member2, member3, member4];

/*************
Construct Page
**************/

/**************
Construct Aside
***************/
const userInfoBox = document.getElementById("user-info");

const generateUserBox = function (parentElement, user) {
	parentElement.classList; //???????
	createComponentUserName(parentElement, user);
	createComponentUserPhoto(parentElement, user);

	let userInfoParentElement = generateUserInfo(parentElement, user);
	createComponentTeam(userInfoParentElement, user);
};

const createComponentUserInfos = function (parentElement, user) {
	let infoParentElement;
	createComponentUserAge(parentElement, user);
	createComponentUserHobbies(parentElement, user);
	createComponentUserTeam(parentElement, user);

};

const createComponentUserName = function (parentElement, user) {
	let component = document.createElement("div");
	component.setAttribute("class", "user-name");
	component.setAttribute("id", "user-name");

	let componentValueText = document.createTextNode(user.firstName + " " + user.lastName);
	component.appendChild(componentValueText);

	parentElement.appendChild(component);
};

const createComponentPhoto = function (parentElement, user) {
	let component = document.createElement("div");
	component.setAttribute("class", "user-photo");
	component.setAttribute("id", "user-photo");

	let componentValueImg = document.createElement("img");
	componentValueImg.setAttribute("src", user.photo);
	component.appendChild(componentValueImg);

	parentElement.appendChild(component);
};

const generateUserInfo = function (parentElement, user) {
	let component = document.createElement("div");
	component.setAttribute("class", "info");
	component.setAttribute("id", "info");

	parentElement.appendChild(component);
	return component;
};

const createComponentTeam = function (parentElement, user) {
	let component = document.createElement("div");
	component.setAttribute("class", "user-team");
	component.setAttribute("id", "user-team");

	let componentLabel = document.createElement("span");
	componentLabel.setAttribute("class", "label");
	component.appendChild(componentLabel);

	let componentValue = document.createElement("span");
	componentValue.setAttribute("class", "value");
	let componentValueText = document.createTextNode(user.team);
	componentValue.appendChild(componentValueText);
	component.appendChild(componentValue);

	parentElement.appendChild(component);
};

const calculateAge = function (date) {

};

const createComponentAge = function (parentElement, user) {
	let component = document.createElement("div");
	component.setAttribute("class", "user-age");
	component.setAttribute("id", "user-age");

	let componentLabel = document.createElement("span");
	componentLabel.setAttribute("class", "label");
	component.appendChild(componentLabel);

	let componentValue = document.createElement("span");
	componentValue.setAttribute("class", "value");

	let age = calculateAge(user.birthDate);
	let componentValueText = document.createTextNode(age + " ans");
	componentValue.appendChild(componentValueText);
	component.appendChild(componentValue);

	parentElement.appendChild(component);
};

generateUserInfo(userInfoBox, member1);

/*************
Construct Main
**************/
const main = document.getElementsByTagName("main")[0];