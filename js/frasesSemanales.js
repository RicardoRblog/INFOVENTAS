// Banco de frases motivacionales
const frases = [
    {
        texto: "La única forma de hacer un gran trabajo es amar lo que haces.",
        autor: "Steve Jobs"
    },
    {
        texto: "La información es el recurso invisible que mueve a las empresas exitosas.",
        autor: "Peter Drucker"
    },
    {
        texto: "En un mundo acelerado, quien tiene la información correcta a tiempo, tiene la ventaja.",
        autor: "Bill Gates"
    },
    {
        texto: "No hay estrategia sin información; no hay éxito sin estrategia.",
        autor: "Michael Porter"
    },
    {
        texto: "Los datos son el nuevo petróleo, pero solo refinados tienen valor.",
        autor: "Clive Humby"
    },
    {
        texto: "Vende beneficios, no características.",
        autor: "Philip Kotler"
    },
    {
        texto: "El cliente nunca compra un producto. Compra una expectativa de beneficio.",
        autor: "Theodore Levitt"
    }
];

// Función para obtener el número de semana actual
function getNumeroSemana() {
    const ahora = new Date();
    const inicioAño = new Date(ahora.getFullYear(), 0, 1);
    const diff = ahora - inicioAño;
    return Math.ceil((diff / 86400000 + inicioAño.getDay() + 1) / 7);
}

// Función para mostrar la frase correspondiente
function mostrarFraseSemanal() {
    const numeroSemana = getNumeroSemana();
    const indiceFrase = numeroSemana % frases.length;
    const frase = frases[indiceFrase];
    
    const elementoFrase = document.getElementById('frase-semanal');
    if(elementoFrase) {
        elementoFrase.innerHTML = `"${frase.texto}" - <strong>${frase.autor}</strong>`;
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    mostrarFraseSemanal();
    setInterval(mostrarFraseSemanal, 3600000); // Verificar cada hora por si cambió la semana
});

// Opcional: Hacer funciones disponibles para otros scripts
export { mostrarFraseSemanal, getNumeroSemana };