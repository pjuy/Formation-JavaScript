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
let enfant = document.createElement();
let textEnfant = document.createTextNode();
enfant.appendChild(textEnfant);
enfant.setAttribute("id", "");

let parent = document.getElementById();
parent.appendChild(enfant);
