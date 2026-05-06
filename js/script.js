document.getElementById("formSuscripcion").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let plan = document.getElementById("plan").value;

    document.getElementById("resultado").innerHTML =
        `<div><b>Nombre:</b> ${nombre || "No especificado"}</div>
         <div><b>Correo:</b> ${correo}</div>
         <div><b>Plan:</b> ${plan}</div>`;

    document.getElementById("modal").style.display = "flex";
});

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}
