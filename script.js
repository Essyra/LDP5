const numeroSecreto = Math.floor(Math.random() *100) +1;
let intentos = [];

function verificarNumero(){
    
    let input = document.getElementById('inputNumero'); //capturamos el input
    let numeroUsuario = Number(input.value); //convierte el valor a un numero 
    let mensaje = document.getElementById('mensaje');
    let intentosTexto = document.getElementById('intentos');

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensaje.innerText = '⚠️ Por favor ingrese un número entre 1 y 100';
        mensaje.style.color = 'red';
        return;
    }
    //vamos a guardar el número de intentos en el array []
    intentos.push(numeroUsuario); //agregamos el numero al array de intentos

    intentosTexto.innerText = `${intentos.join(', ')}`;

    if (numeroUsuario === numeroSecreto) {
        mensaje.textContent = `Felicitaciones! Adivinaste el número secreto (${numeroSecreto})`;
        mensaje.style.color = 'green';
        intentosTexto.innerText = `Tus intentos: ${intentos.join(', ')}`;
        
    }else{
            mensaje.innerText = "El número secreto es incorrecto, intenta de nuevo.";
            mensaje.style.color ='red';
        }
        input.value = ''; //limpiamos el input
}