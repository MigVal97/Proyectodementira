const txtNombre = document.getElementById("txtNombre");
const txtApellido=document.getElementById("txtApellido");
const btnEnviar = document.getElementById("btnEnviar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto=document.getElementById("alertValidacionesTexto")
const txtTelefono=document.getElementById("txtTelefono");

let valid = true; // Variable para controlar la validez del formulario

function validarTelefono(){
if (txtTelefono.value.length==0){
    return false;
}//length==0
if (txtTelefono.value.length !== 10) {
    return false; // No tiene 10 dígitos
}
if(isNaN(txtTelefono.value)){
    return false;
}//inNan
if(Number(txtTelefono.value)<=0){
    return false;
}//<=0

return true;
}//functionvalidarTelefono



btnEnviar.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    txtNombre.style.border ="";
    txtApellido.style.border ="";
    txtTelefono.style.border="";
     alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    
    
    // Validación del nombre
    if (txtNombre.value.length < 3) {
        txtNombre.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML= ("El nombre debe contener al menos 3 letras<br>")
        alertValidaciones.style.display = "block"
        valid=false;      
    }//if length <3 //validar el nombre 

    if (txtApellido.value.length < 3) {
        txtApellido.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML+= ("El apellido debe contener al menos 3 letras<br>")
        alertValidaciones.style.display = "block"
        valid=false;  
    }//if apellido

    if(!validarTelefono()){
        txtTelefono.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="El número telefónico ingresado no es correcto<br>"
        alertValidaciones.style.display="block";
    }//validarTelefono


});//boton
    // Si todo es válido, guardar en localStorage
    // localStorage.setItem("nombre", txtNombre.value);

    // // Opcional: Mostrar un mensaje de éxito
    // alert("Formulario enviado correctamente!");


txtNombre.addEventListener("blur",function(event){
    txtNombre.value=txtNombre.value.trim();
})//blur nombre
txtApellido.addEventListener("blur",function(event){
    txtApellido.value=txtNombre.value.trim();
})//blur apellido