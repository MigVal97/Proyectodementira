const txtNombre = document.getElementById("txtNombre");
const btnEnviar = document.getElementById("btnEnviar");
const alertValidaciones=document.getElementById("alertValidaciones");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidaciones.innerHTML=""
    alertValidaciones.style.display="none"
    if(txtNombre.ariaValueMax.length<3){
    alertValidaciones.innerHTML="El nombre no es correcto"
    alertValidaciones.style.display="block"
    }

    localStorage.setItem("nombre", txtNombre.value);
});//btnEnviar