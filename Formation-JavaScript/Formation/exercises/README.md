# Variables
- Créer un objet équipe
- Dans l'objet équipe créer un objet par membre de l'équipe
- chaque membre a les propriétés :
	> name
	> age
	> 

- Créer 1 variable tableau qui contient les noms
- Créer 1 variable tableau qui contient les âges

# loop
## objects
```javascript
let object = {};
for (let key in object) {
	if (object.hasOwnProperty(key)) {
		console.log(key + ":" + object[key]);
	}
}
```

## array
```javascript
let array = [];
for (let a=0; a<array.length; a++) {
	console.log(array[a]);
}
```

# objects
- créer un constructeur membreEquipe
	> nom
	> age
	> attack
	> defense
	> life
	> méthode attaque()
		> passer la cible en paramètre
		> 50% chance d'échouer
		> si réussi
			> si attaque > défense alors on baisse la vie
				> si vie <= 0 alert("DEAD !);
- créer 1 objet par membre de l'équipe
- attaquer les autres membres !

# generate HTML
```javascript
//construct child
let enfant = document.createElement("html tag");
let textEnfant = document.createTextNode("some text");
enfant.appendChild(textEnfant);
enfant.setAttribute("id", "idText");

//insert into parent element
let parent = document.getElementById("parentId");
parent.appendChild(enfant);
```

# Commencer à designer la page :
- Construire un menu :
	- fonction pour construire un <li>
		> possède 2 arguments : élément parent, nom du li
		> génère automatiquement le texte du li en se basant sur le nom du li
		> génère automatiquement un ID en se basant sur le nom du li (ex : id = "menu-toto")
		> donner un attribut class

	- fonction générer menu
		> boucle sur les membres de l'équipe
		> pour chaque membre, appeler la fonction constuireLi et passer en paramètre : l'élément HTML qui recevra les li, le nom du membre de l'équipe

- Construire une bannière avec les infos d'un membre de l'équipe :
	- créer des fonctions 'composants' pour chaque propriété du membre de l'équipe qu'on souhaite ajouter à la bannière
		> chaque fonction composant reçoit en argument la propriété à afficher
		> un composant doit générer le code HTML
		> un composant doit utiliser la propriété en paramètre pour générer les ID et text du composant

	- fonction générer Bannière
		> reçoit 2 arguments : élément parent, un objet membre de l'équipe en paramètre
		> appelle les différents composants en passant la propriété correspondante au membre de l'équipe
			exemple : composantName(membreEquipe.name);

# boucle pour générer les briques
```javascript
let game = document.getElementById("game-container").innerHTML = "<canvas id='canvas-game' class='canvas-class' width='1160' height='600'></canvas>";

//canvas
let canvas = document.getElementById("canvas-game");
let context = canvas.getContext("2d");

//bricks
let brickWidth = 100;
let brickHeight = 20;
let columns = 10;

//store bricks inside an array
let bricks = [];
for (var c = 0; c < columns; c++) {
	bricks[c] = {
		x:0,
		y:0
	};
}

//draw bricks
for (var c = 0; c < columns; c++) {
	context.beginPath();
	bricks[c].x = c*(brickWidth+10);
	context.rect(c*(brickWidth+10), 100, brickWidth, brickHeight);
	context.fillStyle = "#236a8c";
	context.fill();
	context.closePath();
}
```