const frases = [
    "Desarrollo <span class='neon-text-red'>Full Stack</span>",
    "Desarrollo <span class='neon-text-red'>Python3</span>",
    "Experiencia en <span class='neon-text-red'>CiberSeguridad</span>",
    "Desarrollo de <span class='neon-text-red'>Scripting</span>"
];

const texto = document.getElementById("texto");
let i = 0;
let j = 0;
let escribiendo = true;

function efectoMaquina() {
    const fraseActual = frases[i];
    if (escribiendo) {
        texto.innerHTML = fraseActual.slice(0, j++); // Usamos innerHTML para poder mostrar el HTML de los spans
        if (j > fraseActual.length) {
            escribiendo = false;
            setTimeout(efectoMaquina, 1000); 
            return;
        }
    } else {
        texto.innerHTML = fraseActual.slice(0, --j); // Usamos innerHTML para borrar correctamente el texto
        if (j === 0) {
            escribiendo = true;
            i = (i + 1) % frases.length;
        }
    }
    setTimeout(efectoMaquina, escribiendo ? 100 : 50);
}

efectoMaquina();
