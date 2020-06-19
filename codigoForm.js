var validacion=0;
document.getElementById('p1').innerHTML="hola" + document.getElementById('nombre').value;
document.getElementById('p1').innerHTML="Estimado(a) " + document.getElementById('nombre').value+", su hora para " + document.getElementById('especialidad').options[document.getElementById('especialidad').selectedIndex].text + " ha sido reservada para el día " +/* formato[0]*/ + " a las " +  document.getElementById('hora').value + ". Además, se le envió un mensaje a su correo " + document.getElementById('email').value + " con el detalle de su cita";

(function validarBoton(){
    document.getElementById('botonValidar').onclick=validaciones; 
})();

function validaciones(){
    validadcionNombre();
    validadcionRut();
    validacionDRut();
    apellidos();
    edad();
    email();
    especialidad();
    fecha();
    hora();
    validacionFinal();
}
function validadcionNombre(){
    var campoNombre = document.getElementById('nombre').value;
    const patron = /[a-zA-Z]/gim;

    if(campoNombre.match(patron)){  // aqui debería ser el filtro por campo de texto
        console.log('Nombre ingresador correctamente');
        validacion=validacion+1;
    }
    else{
        alert('Ingrese sólo letras');
    }
    
}
function validadcionRut(){
    var campoRut = document.getElementById('rut').value;
    const patronRut = /[0-9]/gim;

    if(campoRut.match(patronRut)){  // aqui debería ser el filtro por campo de números
        console.log('Rut ingresado correctamente'); 
        validacion=validacion+1;   
    }
    else{
        alert('Ingrese sólo números');
       
    }
    
}

function validacionDRut(){
    var campoDRut = document.getElementById('DRut').value;
    const patronDRut = /[0-9k]/gim;

    if(campoDRut.match(patronDRut) && campoDRut.length==1){  // aqui debería ser el filtro por campo de números
        console.log('Digito verificador ingresado correctamente');  
        validacion=validacion+1;  
    }
    else{
        alert('Ingrese número verificador correctamente');
        
    }
}

function apellidos(){
    var apellidos = document.getElementById('apellidos').value;
    const patronApellido = /[a-zA-Z]/gim;

    if(apellidos.match(patronApellido)){
        console.log('Apellido ingresado correctamente');
        validacion=validacion+1;
    }
    else{
        alert('Sólo letras en Apellido');
        
    }
}

function edad(){
    var edad=document.getElementById('edad').value;
    const patronEdad = /[0-9]/gim;

    if(edad.match(patronEdad)){
        console.log('Edad ingresada correctamente');
        validacion=validacion+1;
    }
    else{
        alert('Sólo números en Edad');
        
    }
}

function email(){
    var email=document.getElementById('email').value;
    const patronEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(email.match(patronEmail)){
        console.log('Email ingresado correctamente');
        validacion=validacion+1;
    }
    else{
        alert('Email ingresador no corresponde a su formato');
        
    }
}

function fecha(){
    var fecha=document.getElementById('fecha').value;
    var formato=fecha.split('-');
    console.log(formato[2]+"-"+formato[1]+"-"+formato[0]);
    if(formato[2]==""){

    }
    else{
        validacion=validacion+1;
    }
}

function especialidad(){
    var especialidad=document.getElementById('especialidad').value;
    if(especialidad!=""){
        validacion=validacion+1;
    }
}

function hora(){
    var hora=document.getElementById('hora').value;
    if(hora!=""){
        validacion=validacion+1;
    }
}

function validacionFinal(){
    var especialidadText=document.getElementById('especialidad');
    var horaText=document.getElementById('hora');

    if(validacion==9){
      //alert("Funciona");
      document.getElementById('p1').innerHTML="Estimado(a) " + document.getElementById('nombre').value+", su hora para " + especialidadText.options[especialidadText.selectedIndex].text + " ha sido reservada para el día " + document.getElementById('fecha').value+ " a las " +  horaText.options[horaText.selectedIndex].text + ". Además, se le envió un mensaje a su correo " + document.getElementById('email').value + " con el detalle de su cita";
      document.getElementById('p2').innerHTML="Gracias por preferirnos";
    }
    else{
        console.log("Faltan datos");
    }
   
}


