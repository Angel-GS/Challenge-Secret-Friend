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

    }

}
