// script.js

// Obtener el canvas y el contexto 2D
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Dibujar el círculo superior
ctx.beginPath();
ctx.arc(100, 50, 10, 0, Math.PI * 2, false); // Círculo en la posición (100, 50)
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.stroke();

// Dibujar el círculo inferior
ctx.beginPath();
ctx.arc(100, 150, 10, 0, Math.PI * 2, false); // Círculo en la posición (100, 150)
ctx.stroke();

// Dibujar la línea vertical superior
ctx.beginPath();
ctx.moveTo(100, 10); // Punto inicial de la línea (superior)
ctx.lineTo(100, 40); // Punto final de la línea
ctx.stroke();

// Dibujar la línea vertical inferior
ctx.beginPath();
ctx.moveTo(100, 160); // Punto inicial de la línea (inferior)
ctx.lineTo(100, 190); // Punto final de la línea
ctx.stroke();

// Dibujar la línea diagonal desde el círculo inferior
ctx.beginPath();
ctx.moveTo(100, 150); // Comienza en el centro del círculo inferior
ctx.lineTo(140, 110); // Termina en el punto deseado
ctx.stroke();
