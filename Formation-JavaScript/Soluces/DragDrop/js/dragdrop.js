/****************************
* Draggable flags constructor
<div class="drag" id="drag-lang-uk">
				<img alt="united kingdom flag" src="flag-en-uk" />
				<p>English (United Kingdom)</p>
			</div>
*****************************/

let languages = [];

//Store languages
class Language {
	constructor(id, name, culture) {
		this.id = id;
		this.name = name;
		this.culture = culture;
	}
};
let langUK = new Language("en-uk", "English", "United Kingdom");
languages.push(langUK);
let langUS = new Language("en-us", "English", "United States");
languages.push(langUS);
let langFR = new Language("fr-fr", "French", "France");
languages.push(langFR);

//Construct draggable elements
const createLangElement = function (langId, langName, langCulture) {
	let dragElement = document.createElement("div");
	dragElement.setAttribute("id", "drag-lang-" + langId);
	dragElement.setAttribute("class", "drag");
	dragElement.setAttribute("draggable", "true");

	let dragImg = document.createElement("img");
	dragImg.setAttribute("src", "images/flag-" + langId);
	dragImg.setAttribute("alt", langCulture + "flag");
	dragElement.appendChild(dragImg);

	let dragParagraph = document.createElement("p")
	let dragParagraphText = document.createTextNode(langName + " (" + langCulture + ")");
	dragParagraph.appendChild(dragParagraphText);
	dragElement.appendChild(dragParagraph);

	dragElement.addEventListener("dragstart", function (event) {
		event.dataTransfer.setData('text/plain', dragElement.id);
		event.dropEffect = "move";
	});

	return dragElement;
};

for (l = 0; l < languages.length; l++) {
	let parentElement = document.getElementById("draggable-flags");
	let newLanguage = createLangElement(languages[l].id, languages[l].name, languages[l].culture);
	parentElement.appendChild(newLanguage);
}

const dropZone = document.getElementById("exo-menu");
dropZone.addEventListener("drop", function (event) {
	event.preventDefault();
	let data = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(data));
});
dropZone.addEventListener("dragover", function (event) {
	event.preventDefault();
	event.dropEffect = "move";
});