
//funcion para ocultar el boton añadir lista
var hideAddList = function(){
	var hide = document.getElementById('add-list');
	hide.classList.add('hidden');
};

//funcion que crea el formulario
var newList = function(){
//obtengo el elemento pabre del argumento de la funcion
	var father = document.getElementById('container2');
//creo una etiqueta form
	var form = document.createElement('form');
//le doy un id a form
	form.setAttribute.add('id', 'new-form');
//crando un input
	var input = document.createElement('input');
//le doy atributos al input
	input.setAttribute.add('id','input');
	input.setAttribute.add('placeholder','Nombre de lista');
//creando el boton submit
	var button = document.createElement('button');
//dandole atributos
	button.setAttribute.add('id','btn');
//creando nodo de texto al boton
 var txtButton = document.createTextNode("Añadir lista");
//agregando elemento a su padre
	button.appendChild(txtButton);
	form.appendChild(input);
	form.appendChild(button);
	father.appendChild(form);
};
//agregando evento para las funciones
var addForm = document.getElementById('add-list');
addForm.addEventListener('click', function(i){
	hideAddList();
	newList(this);
})
