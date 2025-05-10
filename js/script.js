const rango = document.getElementById("rango");
let resultado = document.getElementById("satisfaccion");

valor(rango.value, resultado);

rango.addEventListener("input", function () {

    resultado.value = this.value;
    valor(this.value, resultado);

});
function valor(numero, resultado) {
    switch (numero) {
        case "1":
            resultado.value = "Muy insastifecho";
            break;
        case "2":
            resultado.value = "Insastifecho";
            break;
        case "3":
            resultado.value = "Neutral";
            break;
        case "4":
            resultado.value = "Satisfecho";
            break;
        case "5":
            resultado.value = "Muy satisfecho";
            break;
        default:
            console.log(numero);
            break;
    }
}

function mostrarValores() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    let edad = document.getElementById("edad").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let postal = document.getElementById("zip").value;

    let correo = document.getElementById("correo").value;
    let direccion = document.getElementById("direccion").value;
    let satisfaccion = document.getElementById("satisfaccion").value;

    let comentario = document.getElementById("Comentario").value;
    let color = document.getElementById("colorFavorito").value;

    let genero = document.querySelector('input[name="genero"]:checked');
    let generoValor = genero ? genero.value : "No seleccionado";

    let intereses = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(e => {
        if (e.checked) {
            intereses.push(e.value);

        }
    })

    let Resultado = `Nombre: ${nombre} ${apellido} \nEdad: ${edad} \nFecha de nacimiento: ${fecha} Hora: ${hora} \nDirección: ${direccion} \nCodigo postal: ${postal} Correo: ${correo} \nSatisfacción del usuario: ${satisfaccion} \nComentario: ${comentario || 'Sin comentarios'} \nColor favorito: ${color || 'Sin color favorito'} \nGénero: ${generoValor} \nIntereses: ${intereses.join(', ') || 'Ninguno'}`

    document.getElementById("resultado").textContent = Resultado.trim();
}
