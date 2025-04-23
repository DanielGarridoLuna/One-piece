const db = firebase.firestore();

function enviar(){

    let nombre = document.getElementById("txtnom").value;
    let telefono = document.getElementById("txttel").value;
    let correo = document.getElementById("txtcorreo").value;
    let asunto = document.getElementById("txtasunto").value;

    // Add a new document with a generated id.
db.collection("Contactos").add({
  Nombre: nombre,
  Telefono: telefono,
  Correo: correo,
  Asunto: asunto,
  Fecha: new Date
})
.then(() => {
  alert("Mensaje enviado correctamente");
})
.catch((error) => {
   alert("Error al enviar el mensaje: ", error);
});




}