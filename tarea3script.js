function cargarContactos(){
    var contacto ={ nombre: "jeffry", apellido: "perez", telefono:"809-999-9999"};
    fetch("http://raydelto.org/agenda.php").then(function(contactos){
        return contactos.json();
}).then(function(contactos){
    var cuerpo =document.getElementById("cuerpo");
    var primer = contactos[653];
    cuerpo.innerHTML = primer.nombre + " " + primer.apellido + " " + primer.telefono;
        
    });

    
}


