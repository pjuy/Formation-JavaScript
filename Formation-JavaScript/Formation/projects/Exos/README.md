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
let object = {};
for (let key in object) {
	if (object.hasOwnProperty(key)) {
		console.log(key + ":" + object[key]);
	}
}

## array
let array = [];
for (a=0; a<array.length; a++>) {
	console.log(array[a]);
}