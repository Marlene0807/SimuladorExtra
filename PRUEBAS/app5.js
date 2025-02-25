// Obtener el elemento canvas y el contexto de dibujo
var canvas = document.getElementById('miCanvas');
var ctx = canvas.getContext('2d');

// Lista para almacenar los cuadrados duplicados
var cuadradosDuplicados = [];
var arrastrando = false;
var cuadradoSeleccionado = null;
var offsetX, offsetY;

// Cuadrado original
var cuadradoOriginal = { x: 100, y: 100, size: 50, color: 'blue' };

// Función para dibujar un cuadrado
function dibujarCuadrado(cuadrado) {
    ctx.fillStyle = cuadrado.color;
    ctx.fillRect(cuadrado.x, cuadrado.y, cuadrado.size, cuadrado.size);
}

// Función para detectar si el clic está dentro de un cuadrado
function estaDentroDelCuadrado(x, y, cuadrado) {
    return x > cuadrado.x && x < cuadrado.x + cuadrado.size &&
        y > cuadrado.y && y < cuadrado.y + cuadrado.size;
}

// Evento de clic en el canvas
canvas.addEventListener('mousedown', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // Verificar si el clic está dentro de algún cuadrado duplicado
    for (var i = 0; i < cuadradosDuplicados.length; i++) {
        if (estaDentroDelCuadrado(x, y, cuadradosDuplicados[i])) {
            // Iniciar el arrastre del cuadrado duplicado seleccionado
            arrastrando = true;
            cuadradoSeleccionado = cuadradosDuplicados[i];
            offsetX = x - cuadradoSeleccionado.x;
            offsetY = y - cuadradoSeleccionado.y;
            return;
        }
    }
});

// Evento de movimiento del ratón en el canvas
canvas.addEventListener('mousemove', function (event) {
    if (arrastrando && cuadradoSeleccionado) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        // Mover el cuadrado duplicado seleccionado
        cuadradoSeleccionado.x = x - offsetX;
        cuadradoSeleccionado.y = y - offsetY;
        dibujarTodosLosCuadrados();
    }
});

// Evento de liberación del ratón en el canvas
canvas.addEventListener('mouseup', function (event) {
    arrastrando = false;
    cuadradoSeleccionado = null;
});

// Evento de doble clic en el canvas para duplicar el cuadrado original
canvas.addEventListener('dblclick', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // Verificar si el doble clic está dentro del cuadrado original
    if (estaDentroDelCuadrado(x, y, cuadradoOriginal)) {
        // Duplicar el cuadrado original
        var nuevoCuadrado = {
            x: cuadradoOriginal.x + 60,
            y: cuadradoOriginal.y + 60,
            size: cuadradoOriginal.size,
            color: 'red' // Cambiar color para distinguir el duplicado
        };
        cuadradosDuplicados.push(nuevoCuadrado);
        dibujarTodosLosCuadrados();
    }
});

// Función para dibujar todos los cuadrados
function dibujarTodosLosCuadrados() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarCuadrado(cuadradoOriginal);
    for (var i = 0; i < cuadradosDuplicados.length; i++) {
        dibujarCuadrado(cuadradosDuplicados[i]);
    }
}

// Dibujar el cuadrado original
dibujarCuadrado(cuadradoOriginal);
