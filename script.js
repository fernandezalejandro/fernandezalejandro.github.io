var typed = new Typed('#element', {
    strings: [
        '<span class="texto-contorno">Desarrollo </span><span class="texto-neon">Full Stack</span>',
        '<span class="texto-contorno">Desarrollo </span><span class="texto-neon">Python3</span>',
        '<span class="texto-contorno">Experiencia </span><span class="texto-neon">Pentesting</span>',
        '<span class="texto-contorno">Desarrollo </span><span class="texto-neon">Scripting</span>',
        '<span class="texto-contorno">Desarrollo </span><span class="texto-neon">Full Stack</span>'
    ],
    typeSpeed: 60,
    showCursor: true, // Asegura que el cursor sea visible
    cursorChar: '|',  // Puedes personalizar el carácter del cursor si lo deseas
    backSpeed: 60,    // Velocidad al borrar
    backDelay: 1000,  // Tiempo de espera antes de borrar
});
