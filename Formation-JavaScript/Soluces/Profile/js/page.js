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
let member2 = new TeamMember("Iron", "Man", "images/member2.png", "01/01/2001", "Super Hero", ["Technology", "Money", "Weapons"]);
let member3 = new TeamMember("Super", "Man", "images/member3.jpg", "02/02/2002", "Super Hero", ["Sun", "Planes", "Birds"]);
let member4 = new TeamMember("Aqua", "Man", "images/member4.jpg", "03/03/2003", "Super Hero", ["Fish", "Trident", "Orange"]);

let team = [member1, member2, member3, member4];

/*************
CONSTRUCT PAGE
**************/

/**************
CONSTRUCT ASIDE
***************/

/*******************
Construct user infos
********************/
const userInfoBox = document.getElementById("user-info");

const clearElementHTML = function (element) {
	element.innerHTML = "";
	element.className = "";
};

const generateUserBox = function (parentElement, user) {
	//clear user info data
	clearElementHTML(parentElement);

	//update data
	parentElement.className += user + "-info";
	createComponentUserName(parentElement, user);
	createComponentUserPhoto(parentElement, user);

	let userInfoParentElement = generateUserInfo(parentElement, user);
	createComponentTeam(userInfoParentElement, user);
	createComponentAge(userInfoParentElement, user);
	createComponentHobbies(userInfoParentElement, user);
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

const createComponentUserPhoto = function (parentElement, user) {
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
	let componentLabelText = document.createTextNode("team :");
	componentLabel.appendChild(componentLabelText);
	component.appendChild(componentLabel);

	let componentValue = document.createElement("span");
	componentValue.setAttribute("class", "value");
	let componentValueText = document.createTextNode(user.team);
	componentValue.appendChild(componentValueText);
	component.appendChild(componentValue);

	parentElement.appendChild(component);
};

const calculateAge = function (date) {
	let todayDateObject = new Date();
	let birthDateObjet = new Date(date.split("/")[2], date.split("/")[1], date.split("/")[0]);
	let oneYear = 1000 * 60 * 60 * 24 * 30 * 12;
	let age = Math.trunc((todayDateObject.getTime() - birthDateObjet.getTime()) / oneYear);
	return age;
};

const createComponentAge = function (parentElement, user) {
	let component = document.createElement("div");
	component.setAttribute("class", "user-age");
	component.setAttribute("id", "user-age");

	let componentLabel = document.createElement("span");
	componentLabel.setAttribute("class", "label");
	let componentLabelText = document.createTextNode("age :");
	componentLabel.appendChild(componentLabelText);
	component.appendChild(componentLabel);

	let componentValue = document.createElement("span");
	componentValue.setAttribute("class", "value");

	let userAge = calculateAge(user.birthDate);
	let componentValueText = document.createTextNode(userAge + " ans");
	componentValue.appendChild(componentValueText);
	component.appendChild(componentValue);

	parentElement.appendChild(component);
};

const createElementLi = function (optionClass, optionValue) {
	let option = document.createElement("li");
	let optionId = optionValue.replace(/\s+/g, "-").toLowerCase();
	option.setAttribute("id", "option-" + optionId);
	option.setAttribute("class", optionClass);
	let optionTextNode = document.createTextNode(optionValue);
	option.appendChild(optionTextNode);

	return option;
};

const createComponentHobbies = function (parentElement, user) {
	let component = document.createElement("div");
	component.setAttribute("class", "user-hobbies");
	component.setAttribute("id", "user-hobbies");

	let componentLabel = document.createElement("span");
	componentLabel.setAttribute("class", "label");
	let componentLabelText = document.createTextNode("hobbies :");
	componentLabel.appendChild(componentLabelText);
	component.appendChild(componentLabel);

	let componentValue = document.createElement("span");
	componentValue.setAttribute("class", "value");
	let componentValueUl = document.createElement("ul");
	componentValue.appendChild(componentValueUl);
	for (let h = 0; h < user.hobbies.length; h++) {
		let hobbyLi = createElementLi("hobbies", user.hobbies[h]);
		componentValueUl.appendChild(hobbyLi);
	}
	component.appendChild(componentValue);

	parentElement.appendChild(component);
};

generateUserBox(userInfoBox, team[0]);

/*************
Construct Menu
**************/
const menuBox = document.getElementById("exo-menu");

const generateMenu = function (parentElement) {
	let menuUl = document.createElement("ul");
	for (let t = 0; t < team.length; t++) {
		createMenuItem(menuUl, team[t]);
	}
	parentElement.appendChild(menuUl);
};

const createMenuItem = function (parentElement, menuElement) {

	let menuLi = createElementLi("menu", menuElement.firstName + " " + menuElement.lastName);

	menuLi.addEventListener("click", function () {
		generateUserBox(userInfoBox, menuElement);
	});
	menuLi.addEventListener("click", menuClickHandler);

	parentElement.appendChild(menuLi);
};

const clearMenu = function (menu) {
	for (let m = 0; m < menu.length; m++) {
		if (menu[m].classList.contains("active")) {
			menu[m].classList.remove("active");
		}
	}
}
const menuClickHandler = function (event) {
	let menuElements = menuBox.getElementsByClassName("menu");
	clearMenu(menuElements);
	event.target.classList.add("active");
};

generateMenu(menuBox);

/*************
CONSTRUCT MAIN
**************/
const main = document.getElementsByTagName("main")[0];