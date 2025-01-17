// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friendsList = [];


/** 
 * 1st function neeed to solve the problem is add friends
 * for do that we need capture the input from the user. 
 */ 


function agregarAmigo() {

    //First verify if the input is empty. 
    if(document.getElementById('amigo').value == ''){
        alert('Por favor ingrese un nombre');
        return;
    }else{
        friendsList.push(document.getElementById('amigo').value);
        document.getElementById('amigo').value = '';
        //verificar que no haya duplicados antes de mostrar la lista
        mostrarAmigos();

    }

}

//2nd function is to add every name in the array to <Li> element in the html. 
//Before to add the names we need to clean the list. use innetHTML = '';
//finaly, we need use a for loop to add every name in the array to the html list. 
//so, by every new friend added, we create a new element in the list. 

function mostrarAmigos(){

    let listToShow = document.getElementById('listaAmigos'); 
    listToShow.innerHTML = '';

    for(item of friendsList){
        let newLi = document.createElement('li');
        newLi.innerText = item;
        listToShow.appendChild(newLi);
    }

}


//for the last function we need to sort a random friend from the list. 
/** to do that first we need to verify if the list is empty.
 * then we going to use the math.random function to get a random index 
 * then, we use the random index to get the name of the friend. 
 * finally, we need to update the html with the name of the friend.
 */