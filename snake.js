let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');

// Draw the background
context.fillStyle = "black";
context.fillRect(0, 0, 400, 400);

// Draw the snake
context.fillStyle = 'white';
context.fillRect(200, 200, 20, 20);